const express = require('express');
const logger = require('./logger');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});