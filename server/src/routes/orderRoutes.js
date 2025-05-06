const express = require('express');
const router = express.Router();
const orderController = require('../delivery/orderController');

// Маршрут для создания заказа
router.post('/createOrder', orderController.createOrder);
router.get('/checkStatus/:orderId', orderController.checkOrderStatus);
router.put('/changeStatus/:orderId', orderController.changeOrderStatus);
router.delete('/cancelOrder/:orderId', orderController.cancelOrder);

module.exports = router;