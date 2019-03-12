module.exports = {
  up: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.renameColumn(
        'accompaniment',
        'accompaniment_name',
        'name'
      ),
      queryInterface.renameColumn('arrangers', 'arranger_name', 'name'),
      queryInterface.renameColumn('composers', 'composer_name', 'name'),
      queryInterface.renameColumn('editors', 'editor_name', 'name'),
      queryInterface.renameColumn('genres', 'genre_name', 'name'),
      queryInterface.renameColumn('lyricists', 'lyricist_name', 'name'),
      queryInterface.renameColumn('occasions', 'occasion_name', 'name'),
      queryInterface.renameColumn(
        'score_language',
        'language_name',
        'language'
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.renameColumn(
        'accompaniment',
        'name',
        'accompaniment_name'
      ),
      queryInterface.renameColumn('arrangers', 'name', 'arranger_name'),
      queryInterface.renameColumn('composers', 'name', 'composer_name'),
      queryInterface.renameColumn('editors', 'name', 'editor_name'),
      queryInterface.renameColumn('genres', 'name', 'genre_name'),
      queryInterface.renameColumn('lyricists', 'name', 'lyricist_name'),
      queryInterface.renameColumn('occasions', 'name', 'occasion_name'),
      queryInterface.renameColumn(
        'score_language',
        'language',
        'language_name'
      ),
    ]);
  },
};
