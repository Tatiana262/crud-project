const { gql } = require('graphql-tag');

const typeDefs = gql`
  type CarBrand {
    id: Int!
    name: String!
    model: String!
    fuelType: String!
    bodyType: String!
    purchaseCount: Int!
  }

  # Тип для фильтрации
  input CarBrandFilter {
    name: String
  }

  # Тип для сортировки
  enum SortOrder {
    ASC
    DESC
  }

  type Query {
    carBrands: [CarBrand!]!
    carBrand(id: Int!): CarBrand
    getCarBrandSales(id: Int!): Int!
  }

  type Mutation {
    createCarBrand(
      name: String!
      model: String!
      fuelType: String!
      bodyType: String!
      purchaseCount: Int
    ): CarBrand

    filterCarBrands(filter: CarBrandFilter!): [CarBrand!]!

    sortCarBrands(sortBy: String!, order: SortOrder!): [CarBrand!]!

    updateCarBrand(
        id: Int!
        name: String
        model: String
        fuelType: String
        bodyType: String
        purchaseCount: Int
      ): CarBrand
  
    deleteCarBrand(id: Int!): Boolean
  }
  
`;

module.exports = typeDefs;
