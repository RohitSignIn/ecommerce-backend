const Sequelize = require("sequelize");
const {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DIALECT,
} = require("./server_config");

const DB = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DIALECT,
});

module.exports = DB;
