'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registrocatalogos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      

      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      lugartrabajo: {
        type: Sequelize.STRING
      },
      fechaInicioTrabajo: {
        type: Sequelize.STRING
      },
      tiempoTrabajo: {
        type: Sequelize.STRING
      },
      idpostulantes: {
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
    await queryInterface.dropTable('registrocatalogos');
  }
};