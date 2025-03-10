const express = require('express');
const router = express.Router();

const carBrandController = require('../delivery/carBrandController');

router.get('/getList', carBrandController.getCarBrandsList);

module.exports = router;