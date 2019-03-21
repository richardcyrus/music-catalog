/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'role_id',
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
        field: 'name',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'description',
      },
    },
    {
      tableName: 'roles',
      underscored: true,
      freezeTableName: true,
    }
  );

  Role.associate = (models) => {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: 'user_roles',
      foreignKey: 'role_id',
      as: 'users',
    });
  };

  // From: https://stackoverflow.com/questions/34407193/using-sequelize-with-associations-and-scopes-with-includes-in-multiple-files/40786907#40786907
  Role.loadScopes = (models) => {
    Role.addScope('withUsers', {
      include: [
        {
          model: models.Users,
          as: 'users',
          attributes: ['userLogin', 'userEmail'],
          through: {
            attributes: [],
          },
        },
      ],
    });
  };

  return Role;
};
