const carBrandUseCase = require('../usecase/carBrandUseCase');

async function getCarBrandsList(req, res) {
    try {
      const carBrands = await carBrandUseCase.getCarBrandsList();  // Используем use case для получения данных
      res.status(200).json(carBrands);  // Отправляем ответ в формате JSON
    } catch (error) {
      res.status(500).json({ error: error.message });  // Отправляем ошибку в случае проблем
    }
}
  
module.exports = {
    getCarBrandsList
};