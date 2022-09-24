'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postulaciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  postulaciones.init({
    id_postulaciones: DataTypes.INTEGER,
    salarioPactado: DataTypes.STRING,
    fecha_postulaciones: DataTypes.STRING,
    estado: DataTypes.STRING,
    id_postulante: DataTypes.INTEGER,
    id_ofertaempleo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postulaciones',
  });
  return postulaciones;
};