const { DataTypes } = require("sequelize");
const DB = require("../config/db_config");

const categoryModel = DB.define(
  "category",
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = categoryModel;
