module.exports = {
  up: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.renameColumn('performances', 'performance_name', 'name'),
      queryInterface.renameColumn(
        'performances',
        'performance_description',
        'description'
      ),
      queryInterface.renameColumn(
        'performances',
        'performance_start_date',
        'start_date'
      ),
      queryInterface.renameColumn(
        'performances',
        'performance_end_date',
        'end_date'
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.renameColumn('performances', 'name', 'performance_name'),
      queryInterface.renameColumn(
        'performances',
        'description',
        'performance_description'
      ),
      queryInterface.renameColumn(
        'performances',
        'start_date',
        'performance_start_date'
      ),
      queryInterface.renameColumn(
        'performances',
        'end_date',
        'performance_end_date'
      ),
    ]);
  },
};
