var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const empleadores = require ('../models').empleador; 
const controladorEmpleados = require ('../controllers/empladorcontroller');


/* GET users listing. */
router.get('/ListarEmpleador', function(req, res) {
  return empleadores.findAll({}).then(empleadores => res.status(200).send(empleadores)).catch(error => res.status(400).send(error));

});

router.get('/ListarEmpleador2', controladorEmpleados.ListarEmpleador);
router.get('/empleador/:id', controladorEmpleados.ListarId);




module.exports = router;
