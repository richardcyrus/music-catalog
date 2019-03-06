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
        field: 'role_name',
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'role_description',
      },
    },
    {
      tableName: 'roles',
      underscored: true,
      freezeTableName: true,
    }
  );

  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through: 'user_roles',
      foreignKey: 'role_id',
    });
  };

  return Role;
};
