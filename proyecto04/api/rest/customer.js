var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const customers = require('../models/customers.js');
const offices = require('../models/offices.js'); 
const employees= require('../models/employees.js'); 
var models = initModels(sequelize);  

router.get('/findAll/json', function(req, res, next) {  

    models.customers.findAll({})  
    .then(customers => {  
        res.json(customers);  
    })  
    .catch(error => res.status(400).send(error)) 
  
  });

router.get('/findById/:id', function(req, res, next) {
    models.customers.findOne({
      where: { 
        customerNumber: parseInt(req.params.id)
      }
    })
    .then(customer => {  
        res.json( customer );  
    })  
    .catch(error => res.status(400).send(error))
  });


module.exports = router;

