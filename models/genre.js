/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    'Genre',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'genre_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'genres',
      underscored: true,
      freezeTableName: true,
    }
  );

  Genre.associate = function(models) {
    Genre.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_genres',
      foreignKey: 'genre_id',
    });
  };

  return Genre;
};
