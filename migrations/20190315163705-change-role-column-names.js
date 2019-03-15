module.exports = {
  up: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.renameColumn('roles', 'role_name', 'name'),
      queryInterface.renameColumn('roles', 'role_description', 'description'),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Sequelize.Promise.all([
      queryInterface.renameColumn('roles', 'name', 'role_name'),
      queryInterface.renameColumn('roles', 'description', 'role_description'),
    ]);
  },
};
