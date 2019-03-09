/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Lyricist = sequelize.define(
    'Lyricist',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'lyricist_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'lyricists',
      underscored: true,
      freezeTableName: true,
    }
  );

  Lyricist.associate = function(models) {
    Lyricist.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_lyricists',
      foreignKey: 'lyricist_id',
    });
  };

  return Lyricist;
};
