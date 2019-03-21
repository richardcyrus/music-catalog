const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(parseInt(process.env.SALT_WORK_FACTOR));
const hash = bcrypt.hashSync(process.env.SEED_USER_PASSWORD, salt);

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'users',
      [
        {
          user_login: 'admin',
          user_pass: hash,
          user_email: 'admin@example.com',
          user_registered: new Date(),
          user_active: true,
          user_approved: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
