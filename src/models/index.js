const categoryModel = require("./category_model");
const productModel = require("./product_model");
const userModel = require("./user_model");

categoryModel.hasMany(productModel);
productModel.belongsTo(categoryModel);

module.exports = {
  categoryModel,
  productModel,
  userModel,
};
