/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define(
    'Language',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'language_id',
      },
      language: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'language',
      },
    },
    {
      tableName: 'score_language',
      underscored: true,
      freezeTableName: true,
    }
  );

  Language.associate = function(models) {
    // associations can be defined here
    Language.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_languages',
      foreignKey: 'language_id',
    });
  };

  return Language;
};
