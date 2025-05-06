const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const typeDefs = require("./src/graphql/schema");
const resolvers = require("./src/graphql/resolvers");

const logger = require('./logger');
const bodyParser = require('body-parser');
const carBrandRoutes = require('./src/routes/carBrandRoutes');
const orderRoutes = require('./src/routes/orderRoutes')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json()); // Для обработки JSON данных

app.use('/api/carbrands', carBrandRoutes); 
app.use('/api/orders', orderRoutes); 

// Инициализация GraphQL-сервера
async function startApolloServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
  
    app.use('/graphql', expressMiddleware(server)); // GraphQL middleware
}


startApolloServer().then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(`GraphQL available at http://localhost:${PORT}/graphql`);
    });
});