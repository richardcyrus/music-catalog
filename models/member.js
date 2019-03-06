/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    'Member',
    {
      memberId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'member_id',
      },
      givenName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'given_name',
      },
      familyName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'family_name',
      },
      emailAddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'email_address',
      },
      phoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'phone_number',
      },
      mailingAddress: {
        type: DataTypes.STRING(512),
        allowNull: true,
        field: 'mailing_address',
      },
      vocalRange: {
        type: DataTypes.ENUM(
          'Alto 1',
          'Alto 2',
          'Baritone',
          'Bass',
          'Soprano 1',
          'Soprano 2',
          'Tenor 1',
          'Tenor 2'
        ),
        allowNull: true,
        field: 'vocal_range',
      },
      gender: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'gender',
      },
      pronoun: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'pronoun',
      },
    },
    {
      tableName: 'members',
      underscored: true,
      freezeTableName: true,
    }
  );

  Member.associate = function(models) {
    // associations can be defined here.
    Member.belongsToMany(models.AssignedMusic, {
      through: 'member_music_assignments',
      foreignKey: 'member_id',
    });
  };

  return Member;
};
