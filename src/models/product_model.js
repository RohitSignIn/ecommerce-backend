const { DataTypes } = require("sequelize");
const DB = require("../config/db_config");

const productModel = DB.define(
  "product",
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = productModel;
