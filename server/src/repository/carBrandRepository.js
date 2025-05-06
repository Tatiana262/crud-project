const {CarBrand} = require('../../models');

// Получаем все записи
async function getAllCarBrands() {
    try {
      return await CarBrand.findAll();  // Возвращаем все записи
    } catch (error) {
      throw new Error('Error fetching car brands: ' + error.message);
    }
}


async function getCarBrandById(id) {
  try {
    return await CarBrand.findOne({ where: { id } });
  } catch (error) {
    throw new Error('Error fetching car brand by ID: ' + error.message);
  }
}


async function createCarBrand({ name, model, fuelType, bodyType, purchaseCount }) {
  try {
    const newCarBrand = await CarBrand.create({
      name,
      model,
      fuelType,
      bodyType,
      purchaseCount,
    });
    return newCarBrand;
  } catch (error) {
    throw new Error('Error creating car brand: ' + error.message);
  }
}

async function updateCarBrand({ id, name, model, fuelType, bodyType, purchaseCount }) {
  try {
    const carBrand = await CarBrand.findByPk(id);
    if (!carBrand) throw new Error('Car brand not found');

    carBrand.name = name || carBrand.name;
    carBrand.model = model || carBrand.model;
    carBrand.fuelType = fuelType || carBrand.fuelType;
    carBrand.bodyType = bodyType || carBrand.bodyType;
    carBrand.purchaseCount = purchaseCount || carBrand.purchaseCount;

    await carBrand.save();
    return carBrand;
  } catch (error) {
    throw new Error('Error updating car brand: ' + error.message);
  }
}

async function deleteCarBrand(id) {
  try {
    const carBrand = await CarBrand.findByPk(id);
    if (!carBrand) throw new Error('Car brand not found');

    await carBrand.destroy();
    return true;
  } catch (error) {
    throw new Error('Error deleting car brand: ' + error.message);
  }
}

  
module.exports = {
  getAllCarBrands,
  createCarBrand,
  getCarBrandById,
  updateCarBrand,
  deleteCarBrand
};