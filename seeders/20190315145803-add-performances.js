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
      'performances',
      [
        {
          name: 'Ghosts of Christmas Past',
          description: 'Season 2014-2015 Holiday Show',
          start_date: new Date('2014-12-05T19:30:00'),
          end_date: new Date('2014-12-06T19:30:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Oliver Button is a Sissy',
          description: 'Season 2014-2015 Outreach - Imaginon',
          start_date: new Date('2015-02-21T11:30:00'),
          end_date: new Date('2015-02-21T11:30:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Oliver Button is a Sissy',
          description: 'Season 2014-2015 Outreach - Hickory Grove Library',
          start_date: new Date('2015-02-28T11:00:00'),
          end_date: new Date('2015-02-28T11:00:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Oliver Button is a Sissy',
          description: 'Season 2014-2015 Outreach - Matthews Public Library',
          start_date: new Date('2015-02-28T14:00:00'),
          end_date: new Date('2015-02-28T14:00:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wish: Dreams into Reality',
          description: 'Season 2014-2015 Spring Show - Charleston',
          start_date: new Date('2015-03-14T15:00:00'),
          end_date: new Date('2015-03-14T15:00:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wish: Dreams into Reality',
          description: 'Season 2014-2015 Spring Show - Wadesboro',
          start_date: new Date('2015-03-15T15:00:00'),
          end_date: new Date('2015-03-15T15:00:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wish: Dreams into Reality',
          description: 'Season 2014-2015 Spring Show - Great Aunt Stella',
          start_date: new Date('2015-03-20T19:30:00'),
          end_date: new Date('2015-03-20T19:30:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Wish: Dreams into Reality',
          description: 'Season 2014-2015 Spring Show - Gastonia',
          start_date: new Date('2015-03-21T19:30:00'),
          end_date: new Date('2015-03-21T19:30:00'),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Hollywood Squares: The Speakeasy Edition',
          description: 'Season 2014-2015 Summer Show',
          start_date: new Date('2015-06-18T20:00:00'),
          end_date: new Date('2015-06-20T20:00:00'),
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
    return queryInterface.bulkDelete('performances', null, {});
  },
};
