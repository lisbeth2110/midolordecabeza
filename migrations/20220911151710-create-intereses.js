'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('intereses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idcategoria: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName:'categoria',
          },
          key: 'id'
        },
        allowNull: false
      },

      idpostulante: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName:'postulantes',
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('intereses');
  }
};