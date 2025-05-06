const carBrandRepository = require("../repository/carBrandRepository")

const resolvers = {
  Query: {
    // Возвращаем все бренды
    carBrands: async () => {
        try {
          return await carBrandRepository.getAllCarBrands();
        } catch (error) {
          throw new Error('Error fetching car brands: ' + error.message);
        }
    },
    // Возвращаем один бренд по ID
    carBrand: async (_, { id }) => {
        try {
          return await carBrandRepository.getCarBrandById(id);
        } catch (error) {
          throw new Error('Error fetching car brand: ' + error.message);
        }
    },
    getCarBrandSales: async (_, { id }) => {
        try {
          const carBrand = await carBrandRepository.getCarBrandById(id);
          
          if (!carBrand) {
            throw new Error("Car brand not found");
          }
          
          return carBrand.purchaseCount; // Возвращаем количество проданных автомобилей
        } catch (error) {
          throw new Error('Error fetching car brand sales: ' + error.message);
        }
    },
  },

  Mutation: {
    // Создаем новый бренд
    createCarBrand: async (_, { name, model, fuelType, bodyType, purchaseCount }) => {
      try {
        const newCarBrand = await carBrandRepository.createCarBrand({ name, model, fuelType, bodyType, purchaseCount });
        return newCarBrand;
      } catch (error) {
        throw new Error('Error creating car brand: ' + error.message);
      }
    },

    // Фильтрация по имени
    filterCarBrands: async (_, { filter }) => {
        try {
          const { name } = filter;
          const allCarBrands = await carBrandRepository.getAllCarBrands();
  
          // Фильтруем по имени, если оно передано
          const filteredBrands = name
            ? allCarBrands.filter((brand) => brand.name.toLowerCase().includes(name.toLowerCase()))
            : allCarBrands;
  
          return filteredBrands;
        } catch (error) {
          throw new Error('Error filtering car brands: ' + error.message);
        }
      },

    // Сортировка по имени
    sortCarBrands: async (_, { sortBy, order }) => {
        try {
          const allCarBrands = await carBrandRepository.getAllCarBrands();
  
          // Сортируем по имени
          const sortedBrands = allCarBrands.sort((a, b) => {
            if (order === "ASC") {
              return a[sortBy].localeCompare(b[sortBy]);
            } else {
              return b[sortBy].localeCompare(a[sortBy]);
            }
          });
  
          return sortedBrands;
        } catch (error) {
          throw new Error('Error sorting car brands: ' + error.message);
        }
    },
    // Обновляем существующий бренд
    updateCarBrand: async (_, { id, name, model, fuelType, bodyType, purchaseCount }) => {
        try {
          const updatedCarBrand = await carBrandRepository.updateCarBrand({ id, name, model, fuelType, bodyType, purchaseCount });
          return updatedCarBrand;
        } catch (error) {
          throw new Error('Error updating car brand: ' + error.message);
        }
    },
    // Удаляем бренд
    deleteCarBrand: async (_, { id }) => {
        try {
          const success = await carBrandRepository.deleteCarBrand(id);
          return success;
        } catch (error) {
          throw new Error('Error deleting car brand: ' + error.message);
        }
    },
  }
};

module.exports = resolvers;
