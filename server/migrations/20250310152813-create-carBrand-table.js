'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('CarBrands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fuelType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bodyType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      purchaseCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('CarBrands');
  }
};
