const express = require('express');
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

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});