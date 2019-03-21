const { seedMusic } = require('./seedData');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all(
      seedMusic.map(async (musicRecord) => {
        try {
          let performed;

          const { performances, ...music } = musicRecord;

          const sheetMusic = await db.SheetMusic.findOne({
            where: { title: music.title, quantityOnHand: music.quantityOnHand },
          });

          if (performances !== undefined && performances.length > 0) {
            performed = await Promise.all(
              performances.map((name) =>
                db.Performance.findAll({ where: { name } }).then(([p]) => p)
              )
            );
            sheetMusic.setPerformed(performed);
          }

          return sheetMusic;
        } catch (err) {
          throw err.message;
        }
      })
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
