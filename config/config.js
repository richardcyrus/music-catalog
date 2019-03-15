/**
 * your-score
 *
 * (c) 2019 Richard Cyrus, Rojin Pourkhomami, Alexis Rogers, Santiago Sepulveda
 */
const path = require('path');

module.exports = {
  development: {
    use_env_variable: 'MYSQLDB_URL',
    dialect: 'mysql',
    migrationStorage: 'json',
    migrationStoragePath: path.join(
      __dirname,
      '..',
      'migrations',
      'sequelize-meta.json'
    ),
    seederStorage: 'json',
    seederStoragePath: path.join(
      __dirname,
      '..',
      'seeders',
      'sequelize-data.json'
    ),
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: process.env.CI_DB_HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    dialect: 'mysql',
  },
};
