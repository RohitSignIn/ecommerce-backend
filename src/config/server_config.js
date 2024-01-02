const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT | 3036;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_ALTER = process.env.DB_ALTER;
const DB_FORCE = process.env.DB_FORCE;
const DIALECT = process.env.DIALECT;
const SALT_ROUND = process.env.SALT_ROUND;

module.exports = {
  PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_ALTER,
  DB_FORCE,
  DIALECT,
  SALT_ROUND,
};
