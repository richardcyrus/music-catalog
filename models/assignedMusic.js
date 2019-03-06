/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const AssignedMusic = sequelize.define(
    'AssignedMusic',
    {
      Id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'assignment_id',
      },
      dateAssigned: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'date_assigned',
      },
      dateReturned: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'date_returned',
      },
      quantityAssigned: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: true,
        field: 'quantity_assigned',
      },
    },
    {
      tableName: 'assigned_music',
      underscored: true,
      freezeTableName: true,
    }
  );

  AssignedMusic.associate = function(models) {
    AssignedMusic.belongsToMany(models.Member, {
      through: 'member_music_assignments',
      foreignKey: 'assignment_id',
    });
    AssignedMusic.belongsToMany(models.SheetMusic, {
      through: 'music_assignments',
      foreignKey: 'assignment_id',
    });
  };

  return AssignedMusic;
};
