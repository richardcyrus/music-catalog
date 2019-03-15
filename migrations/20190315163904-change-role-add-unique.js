module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addIndex('roles', {
      unique: true,
      fields: ['name'],
      name: 'name',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeIndex('roles', 'name', {});
  },
};
