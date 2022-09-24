'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detalleoferta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detalleoferta.init({
    id_detalleOferta: DataTypes.INTEGER,
    id_ofertaEmpleo: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'detalleoferta',
  });
  return detalleoferta;
};