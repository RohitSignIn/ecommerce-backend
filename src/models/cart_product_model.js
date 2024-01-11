const { DataTypes } = require("sequelize");
const DB = require("../config/db_config");

const cartProductModel = DB.define(
  "cartProduct",
  {
    // cartId - auto from sequelize relation
    // productId - auto from sequelize relation
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
    },
  },
  { timestamps: false }
);

module.exports = cartProductModel;
