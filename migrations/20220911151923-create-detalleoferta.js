'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detalleoferta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idofertaempleos: {
        type: Sequelize.INTEGER,
          references:{
            model: {
              tableName:'ofertaempleos',
            },
            key: 'id'
          },
          allowNull: false
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
    await queryInterface.dropTable('detalleoferta');
  }
};