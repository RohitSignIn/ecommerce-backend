const categoryModel = require("./category_model");
const productModel = require("./product_model");
const userModel = require("./user_model");
const cartModel = require("./cart_model");
const cartProductModel = require("./cart_product_model");

// one to Many association, Category and product association
categoryModel.hasMany(productModel);
productModel.belongsTo(categoryModel);

// one to one, user and cart association
userModel.hasOne(cartModel);
cartModel.belongsTo(userModel);

// Many to Many association, cart ans product association
cartModel.belongsToMany(productModel, { through: cartProductModel });
productModel.belongsToMany(cartModel, { through: cartProductModel });

module.exports = {
  categoryModel,
  productModel,
  userModel,
  cartModel,
  cartProductModel,
};
