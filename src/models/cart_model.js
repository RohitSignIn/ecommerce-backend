const { DataTypes } = require("sequelize");
const DB = require("../config/db_config");

const cartModel = DB.define("cart", {}, { timestamps: false });

module.exports = cartModel;
