const orderRepository = require('../repository/orderRepository');

async function createOrder(customerName, items) {
    if (!customerName || !Array.isArray(items) || items.length === 0) {
      throw new Error('Invalid data'); // Валидация входных данных
    }
  
    return await orderRepository.createOrder(customerName, items); // Вызываем репозиторий
  }
  
module.exports = {
    createOrder
};