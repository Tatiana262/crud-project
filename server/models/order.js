module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('создан', 'в пути', 'доставлен'),
        allowNull: false,
        defaultValue: 'создан',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'Orders',
      timestamps: false,
    });
  
    Order.associate = function(models) {
      // Связь с товарами через промежуточную таблицу
      Order.belongsToMany(models.CarBrand, {
        through: 'OrderItems',
        foreignKey: 'orderId',
      });
    };
  
    return Order;
  };
  