'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      carBrandId: { // Для связи с CarBrands
        type: Sequelize.INTEGER,
        references: {
          model: 'CarBrands',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItems');
  }
};
