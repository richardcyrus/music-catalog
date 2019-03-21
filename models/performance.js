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
        field: 'name',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'description',
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'start_date',
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'end_date',
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
      as: 'songs',
    });
  };

  // From: https://stackoverflow.com/questions/34407193/using-sequelize-with-associations-and-scopes-with-includes-in-multiple-files/40786907#40786907
  Performance.loadScopes = function(models) {
    Performance.addScope('songs', {
      include: [
        {
          model: models.SheetMusic,
          as: 'songs',
          attributes: ['title'],
          through: {
            attributes: [],
          },
        },
      ],
    });
  };

  return Performance;
};
