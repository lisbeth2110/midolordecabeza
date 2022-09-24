'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registrocatalogo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registrocatalogo.init({
    id_registrocatalogo: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    lugartrabajo: DataTypes.STRING,
    fechaInicioTrabajo: DataTypes.STRING,
    tiempoTrabajo: DataTypes.STRING,
    id_postulante: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'registrocatalogo',
  });
  return registrocatalogo;
};