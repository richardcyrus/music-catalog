/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Composer = sequelize.define(
    'Composer',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'composer_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'composers',
      underscored: true,
      freezeTableName: true,
    }
  );

  Composer.associate = function(models) {
    Composer.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_composers',
      foreignKey: 'composer_id',
    });
  };

  return Composer;
};
