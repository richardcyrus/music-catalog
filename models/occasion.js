/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = function(sequelize, DataTypes) {
  const Occasion = sequelize.define(
    'Occasion',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'occasion_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'occasions',
      underscored: true,
      freezeTableName: true,
    }
  );

  Occasion.associate = function(models) {
    // associations can be defined here
    Occasion.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_occasions',
      foreignKey: 'occasion_id',
    });
  };

  return Occasion;
};
