const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT | 3036;

module.exports = {
  PORT,
};
