/* eslint-disable no-return-await */

const db = require('../models');

const {
  accompaniment,
  arrangers,
  lyricists,
  composers,
  occasions,
  seedMusic,
} = require('./seedData');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Promise.all([
      db.Accompaniment.bulkCreate(accompaniment),
      db.Arranger.bulkCreate(arrangers),
      db.Lyricist.bulkCreate(lyricists),
      db.Composer.bulkCreate(composers),
      db.Occasion.bulkCreate(occasions),
    ]);

    await Promise.all(
      seedMusic.map(async (music) => {
        try {
          let newAccompaniments;
          let newComposers;
          let newLyricists;
          let newArrangers;
          let newOccasions;

          const {
            accompaniments,
            composers,
            lyricists,
            arrangers,
            occasions,
            ...musicItem
          } = music;

          const newMusic = await db.SheetMusic.create(musicItem);

          if (accompaniments !== undefined && accompaniments.length > 0) {
            newAccompaniments = await Promise.all(
              accompaniments.map((name) =>
                db.Accompaniment.findOrCreate({ where: { name } }).then(
                  ([i]) => i
                )
              )
            );
            newMusic.setAccompaniments(newAccompaniments);
          }

          if (composers !== undefined && composers.length > 0) {
            newComposers = await Promise.all(
              composers.map((name) =>
                db.Composer.findOrCreate({ where: { name } }).then(([c]) => c)
              )
            );
            newMusic.setComposers(newComposers);
          }

          if (lyricists !== undefined && lyricists.length > 0) {
            newLyricists = await Promise.all(
              lyricists.map((name) =>
                db.Lyricist.findOrCreate({ where: { name } }).then(([l]) => l)
              )
            );
            newMusic.setLyricists(newLyricists);
          }

          if (arrangers !== undefined && arrangers.length > 0) {
            newArrangers = await Promise.all(
              arrangers.map((name) =>
                db.Arranger.findOrCreate({ where: { name } }).then(([ar]) => ar)
              )
            );
            newMusic.setArrangers(newArrangers);
          }

          if (occasions !== undefined && occasions.length > 0) {
            newOccasions = await Promise.all(
              occasions.map((name) =>
                db.Occasion.findOrCreate({ where: { name } }).then(([o]) => o)
              )
            );
            newMusic.setOccasions(newOccasions);
          }

          return newMusic;
        } catch (err) {
          throw err.message;
        }
      })
    );
  },

  down: (queryInterface, Sequelize) => {},
};
