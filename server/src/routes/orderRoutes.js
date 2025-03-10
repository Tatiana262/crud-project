const express = require('express');
const router = express.Router();
const orderController = require('../delivery/orderController');

// Маршрут для создания заказа
router.post('/createOrder', orderController.createOrder);

module.exports = router;