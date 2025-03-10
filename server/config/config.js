require('dotenv').config();

//console.log(process.env.DB_HOST);  // Проверяем значение DB_HOST
//console.log(process.env.DB_PORT);  // Проверяем значение DB_PORT

module.exports = {
  development: {
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_NAME),
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    dialect: 'postgres'
  }
}