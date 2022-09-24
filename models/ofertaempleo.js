'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ofertaempleo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ofertaempleo.init({
    id_ofertaempleo: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    salario: DataTypes.STRING,
    horario: DataTypes.STRING,
    tiempo_estimado: DataTypes.STRING,
    id_empleador: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ofertaempleo',
  });
  return ofertaempleo;
};