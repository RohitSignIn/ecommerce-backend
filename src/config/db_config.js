const Sequelize = require("sequelize");
const {
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DIALECT,
} = require("./server_config");

const DB = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DIALECT,
  logging: false,
});

module.exports = DB;
