/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Arranger = sequelize.define(
    'Arranger',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'arranger_id',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'arrangers',
      underscored: true,
      freezeTableName: true,
    }
  );

  Arranger.associate = function(models) {
    // associations can be defined here
    Arranger.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_arrangers',
      foreignKey: 'arranger_id',
    });
  };

  return Arranger;
};
