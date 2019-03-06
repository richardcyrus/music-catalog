/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Performance = sequelize.define(
    'Performance',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'performance_id',
      },
      name: {
        type: DataTypes.STRING(512),
        allowNull: true,
        field: 'performance_name',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'performance_description',
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'performance_start_date',
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'performance_end_date',
      },
    },
    {
      tableName: 'performances',
      underscored: true,
      freezeTableName: true,
    }
  );

  Performance.associate = function(models) {
    // associations can be defined here
    Performance.belongsToMany(models.SheetMusic, {
      through: 'music_performed',
      foreignKey: 'performance_id',
    });
  };

  return Performance;
};
