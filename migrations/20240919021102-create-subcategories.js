'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SubCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,  
        references: {
          model: 'Categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SubCategories');
  },
};
