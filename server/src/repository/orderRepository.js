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
  
  module.exports = {
    createOrder
  };