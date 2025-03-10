const {CarBrand} = require('../../models');

// Получаем все записи
async function getAllCarBrands() {
    try {
      return await CarBrand.findAll();  // Возвращаем все записи
    } catch (error) {
      throw new Error('Error fetching car brands: ' + error.message);
    }
  }
  
  module.exports = {
    getAllCarBrands
  };