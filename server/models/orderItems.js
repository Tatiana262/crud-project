module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      carBrandId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'CarBrands',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      }
    }, {
      tableName: 'OrderItems',
      timestamps: false,
    });
  
    return OrderItem;
  };
  