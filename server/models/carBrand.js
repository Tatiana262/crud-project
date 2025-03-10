module.exports = (sequelize, DataTypes) => {
    const CarBrand = sequelize.define('CarBrand', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          model: {
            type: DataTypes.STRING,
            allowNull: false
          },
          fuelType: {
            type: DataTypes.STRING,
            allowNull: false
          },
          bodyType: {
            type: DataTypes.STRING,
            allowNull: false
          },
          purchaseCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
          }
    }, {
        tableName: 'CarBrands',
        timestamps: false
    });
    return CarBrand;
  };
  