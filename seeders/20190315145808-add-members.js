module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    await queryInterface.bulkInsert(
      'members',
      [
        {
          given_name: 'Robert',
          family_name: 'Furr',
          email_address: 'robert.furr@onevoicechorus.com',
          vocal_range: 'Tenor 1',
          gender: 'male',
          pronoun: 'He, Him',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          given_name: 'Harold',
          family_name: 'Lowry',
          vocal_range: 'Baritone',
          gender: 'male',
          pronoun: 'He, Him',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          given_name: 'Carl',
          family_name: 'Letourneau',
          vocal_range: 'Bass',
          gender: 'male',
          pronoun: 'He, Him',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          given_name: 'Caroline',
          family_name: 'Cave',
          vocal_range: 'Alto 1',
          gender: 'female',
          pronoun: 'She, Her',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          given_name: 'Elizabeth',
          family_name: 'Fitzgerald',
          vocal_range: 'Soprano 2',
          gender: 'female',
          pronoun: 'She, Her',
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
      await a promise to correctly handle asynchronicity.

      Example:
      await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('members', null, {});
  },
};
