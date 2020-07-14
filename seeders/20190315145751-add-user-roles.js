module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert(
      'roles',
      [
        {
          name: 'Administrator',
          description: 'Global Administrator',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Artistic Director',
          description: 'Artistic Director',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Librarian',
          description: 'Librarian',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Member',
          description: 'Member',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('roles', null, {});
  },
};
