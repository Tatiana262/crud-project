const orderRepository = require('../repository/orderRepository');

async function createOrder(customerName, items) {
    if (!customerName || !Array.isArray(items) || items.length === 0) {
      throw new Error('INVALID_DATA'); // Валидация входных данных
    }
  
    return await orderRepository.createOrder(customerName, items); // Вызываем репозиторий
}

async function checkOrderStatus(orderId) {
  const order = await orderRepository.getOrderById(orderId);

  if(!order) {
    throw new Error('NOT_FOUND');
  }

  return order.status;
}

async function changeOrderStatus(orderId, status) {
  const order = await orderRepository.getOrderById(orderId);

  if (!order) {
    throw new Error('NOT_FOUND');
  }

  return await orderRepository.updateOrderStatus(order, status);
}

async function cancelOrder(orderId) {
  const order = await orderRepository.getOrderById(orderId);

  if (!order) {
      throw new Error('NOT_FOUND');
  }

  if (order.status !== 'создан') {
      throw new Error('ORDER_IN_TRANSIT');
  }

  await orderRepository.deleteOrder(orderId);
}


  
module.exports = {
    createOrder,
    checkOrderStatus,
    changeOrderStatus,
    cancelOrder
};