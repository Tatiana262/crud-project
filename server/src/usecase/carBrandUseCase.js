const carBrandRepository = require("../repository/carBrandRepository");

async function getCarBrandsList() {
    try {
      const carBrands = await carBrandRepository.getAllCarBrands();  // Получаем данные через репозиторий
      return carBrands;  // Возвращаем результат
    } catch (error) {
      throw new Error('Error in use case: ' + error.message);
    }
  }
  
  module.exports = {
    getCarBrandsList
  };