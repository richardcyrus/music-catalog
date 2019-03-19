/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const bcrypt = require('bcrypt');
const BCRYPT_SALT_WORK_FACTOR = parseInt(process.env.SALT_WORK_FACTOR);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'user_id',
      },
      userLogin: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true,
        field: 'user_login',
      },
      userPass: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'user_pass',
      },
      userEmail: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        field: 'user_email',
      },
      userRegistered: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'user_registered',
      },
      userActivationKey: {
        type: DataTypes.STRING(60),
        allowNull: true,
        field: 'user_activation_key',
      },
      userActive: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        field: 'user_active',
      },
      userApproved: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: '0',
        field: 'user_approved',
      },
      userApprovedDate: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'user_approved_date',
      },
    },
    {
      tableName: 'users',
      underscored: true,
      freezeTableName: true,
    }
  );

  User.prototype.validPassword = function(password) {
    return bcrypt.compare(password, this.userPass);
  };

  User.beforeSave((user, options) => {
    if (user.changed('userPass')) {
      return bcrypt
        .hash(user.userPass, BCRYPT_SALT_WORK_FACTOR)
        .then((hash) => {
          user.userPass = hash;
        })
        .catch((err) => {
          throw new Error(err);
        });
    }
  });

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Role, {
      through: 'user_roles',
      foreignKey: 'user_id',
      as: 'roles',
    });
  };

  User.loadScopes = function(models) {
    User.addScope('withRoles', {
      include: [
        {
          model: models.Role,
          as: 'roles',
          attributes: ['id', 'name', 'description'],
          through: {
            attributes: [],
          },
        },
      ],
    });
  };

  return User;
};
