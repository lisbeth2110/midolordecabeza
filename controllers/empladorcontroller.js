const Sequelize = require('sequelize');
const empleadores = require ("../models").empleador; 

module.exports=
{
  ListarEmpleador(req, res) {
    return empleadores.findAll({}).then(empleadores => res.status(200).send(empleadores)).catch(error => res.status(400).send(error));
  },

  ListarId(req, res) {
    return empleadores.findAll({
      where: {
        id: req.params.id
    }
  })
  .then(empleadores => res.status(200).send(empleadores))
  .catch(error => res.status(400).send(error));
}


