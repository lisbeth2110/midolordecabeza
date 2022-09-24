'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empleador.init({
    tipoPersona: DataTypes.STRING,
    razonSocial: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    fechaNacimiento: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'empleador',
  });
  return empleador;
};