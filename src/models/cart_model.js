const DB = require("../config/db_config");

const cartModel = DB.define(
  "cart",
  {
    // id - the cartid - auto from sequelize association
    // userId - auto from sequelize association
  },
  { timestamps: false }
);

module.exports = cartModel;
