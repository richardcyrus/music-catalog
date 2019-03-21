/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Editor = sequelize.define(
    'Editor',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'editor_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
    },
    {
      tableName: 'editors',
      underscored: true,
      freezeTableName: true,
    }
  );

  Editor.associate = function(models) {
    Editor.belongsToMany(models.SheetMusic, {
      through: 'sheet_music_editors',
      foreignKey: 'editor_id',
    });
  };

  return Editor;
};
