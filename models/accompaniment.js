/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Accompaniment = sequelize.define(
    'Accompaniment',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'accompaniment_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'accompaniment',
      underscored: true,
      freezeTableName: true,
    }
  );

  Accompaniment.associate = function(models) {
    Accompaniment.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_accompaniments',
      foreignKey: 'accompaniment_id',
    });
  };

  return Accompaniment;
};
