const orderUseCase = require('../usecase/orderUseCase');

// Создание нового заказа
async function createOrder(req, res) {
    try {
      const { customerName, items } = req.body; // Извлекаем данные из тела запроса
      const order = await orderUseCase.createOrder(customerName, items); // Вызываем UseCase
      res.status(201).json(order); // Отправляем ответ с заказом
    } catch (error) {
      res.status(400).json({ error: error.message }); // Обработка ошибок
    }
  }
  
module.exports = {
   createOrder
};