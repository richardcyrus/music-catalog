/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define(
    'Location',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'location_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'location_name',
      },
      details: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'location_details',
      },
    },
    {
      tableName: 'location',
      underscored: true,
      freezeTableName: true,
    }
  );

  Location.associate = function(models) {
    // associations can be defined here
    Location.hasMany(models.SheetMusic, {
      foreignKey: 'location_id',
      sourceKey: 'location_id',
    });
  };

  return Location;
};
