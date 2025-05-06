const orderUseCase = require('../usecase/orderUseCase');

// Создание нового заказа
async function createOrder(req, res) {
    try {
      const { customerName, items } = req.body; // Извлекаем данные из тела запроса
      const order = await orderUseCase.createOrder(customerName, items); // Вызываем UseCase

      res.status(201).json(order); // Создано
    } catch (error) {
      if (error.message === 'INVALID_DATA') {
        return res.status(400).json({ error: "Invalid data" }); // Некорректный запрос
      }
      res.status(500).json({ error: error.message }); // Внутренняя ошибка сервера
    }
}

async function checkOrderStatus(req, res) {
  try {
    const { orderId } = req.params; // Извлекаем данные из тела запроса
    const status = await orderUseCase.checkOrderStatus(orderId); // Вызываем UseCase

    res.status(200).json({orderId, status}); // Найдено
  } catch (error) {
    if (error.message === 'NOT_FOUND') {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(500).json({ error: error.message }); // Внутренняя ошибка сервера
  }
}

async function changeOrderStatus(req, res) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const updatedOrder = await orderUseCase.changeOrderStatus(orderId, status);

    res.status(200).json({orderId, status: updatedOrder.status});
  }
  catch (error) {
    if (error.message === 'NOT_FOUND') {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(500).json({ error: error.message });
  }
}

async function cancelOrder(req, res) {
  try {
      const { orderId } = req.params;
      await orderUseCase.cancelOrder(orderId);
      return res.status(200).json({ message: 'Order successfully canceled' });
  } catch (error) {
      if (error.message === 'NOT_FOUND') {
          return res.status(404).json({ error: 'Order not found' });
      }
      if (error.message === 'ORDER_IN_TRANSIT') {
          return res.status(400).json({ error: 'Cannot cancel an order that is already in transit' });
      }
      res.status(500).json({ error: error.message });
  }
}
  
module.exports = {
   createOrder,
   checkOrderStatus,
   changeOrderStatus,
   cancelOrder
};