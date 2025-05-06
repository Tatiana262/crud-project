const {Order, OrderItem} = require("../../models");

async function createOrder(customerName, items) {
    try {
      // Создаем заказ
      const order = await Order.create({ customerName });
  
      // Добавляем товары в заказ
      const orderItems = items.map(item => ({
        orderId: order.id,
        carBrandId: item.carBrandId,
        quantity: item.quantity
      }));
  
      await OrderItem.bulkCreate(orderItems); // Добавляем все товары
  
      return order; // Возвращаем заказ
    } catch (error) {
      throw new Error('Error creating order: ' + error.message);
    }
}

async function getOrderById(orderId) {
  try {
    const order = await Order.findByPk(orderId, {attributes: ['id', 'status']});
    return order;
  }
  catch (error) {
    throw new Error('Error finding order: ' + error.message);
  }
}

async function updateOrderStatus(order, status) {
  try {
    
    order.status = status;
    await order.save(); // Сохраняем изменения в БД

    return order; // Возвращаем обновлённый заказ

  }
  catch (error) {
    throw new Error('Error updating order status: ' + error.message);
  }
}

async function deleteOrder(orderId) {
  try {
    await Order.destroy({ where: { id: orderId } });
  } catch (error) {
    throw new Error('Error deleting order: ' + error.message);
  }
}
  
module.exports = {
  createOrder,
  getOrderById,
  updateOrderStatus,
  deleteOrder
};