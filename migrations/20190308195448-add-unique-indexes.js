module.exports = {
  up: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.addIndex('accompaniment', {
        unique: true,
        fields: ['name'],
        name: 'accompaniment_name',
      }),
      queryInterface.addIndex('arrangers', {
        unique: true,
        fields: ['name'],
        name: 'arrangers_name',
      }),
      queryInterface.addIndex('composers', {
        unique: true,
        fields: ['name'],
        name: 'composers_name',
      }),
      queryInterface.addIndex('editors', {
        unique: true,
        fields: ['name'],
        name: 'editors_name',
      }),
      queryInterface.addIndex('genres', {
        unique: true,
        fields: ['name'],
        name: 'genres_name',
      }),
      queryInterface.addIndex('lyricists', {
        unique: true,
        fields: ['name'],
        name: 'lyricists_name',
      }),
      queryInterface.addIndex('occasions', {
        unique: true,
        fields: ['name'],
        name: 'occasions_name',
      }),
      queryInterface.addIndex('score_language', {
        unique: true,
        fields: ['language'],
        name: 'score_language_name',
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.removeIndex('accompaniment', 'accompaniment_name', {}),
      queryInterface.removeIndex('arrangers', 'arrangers_name', {}),
      queryInterface.removeIndex('composers', 'composers_name', {}),
      queryInterface.removeIndex('editors', 'editors_name', {}),
      queryInterface.removeIndex('genres', 'genres_name', {}),
      queryInterface.removeIndex('lyricists', 'lyricists_name', {}),
      queryInterface.removeIndex('occasions', 'occasions_name', {}),
      queryInterface.removeIndex('score_language', 'score_language_name', {}),
    ]);
  },
};
