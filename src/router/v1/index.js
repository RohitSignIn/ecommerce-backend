const v1Routes = require("express").Router();
const cartProductRoute = require("./cart_product_route");
const cartRoute = require("./cart_route");
const categoryRoute = require("./category_routes");
const productRoute = require("./product_routes");
const userRoute = require("./user_routes");

v1Routes.use("/category", categoryRoute);
v1Routes.use("/product", productRoute);
v1Routes.use("/user", userRoute);
v1Routes.use("/cart", cartRoute);
v1Routes.use("/cart-products", cartProductRoute);

module.exports = v1Routes;
