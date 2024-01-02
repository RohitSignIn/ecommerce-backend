const v1Routes = require("express").Router();
const categoryRoute = require("./category_routes");
const productRoute = require("./product_routes");
const userRoute = require("./user_routes");

v1Routes.use("/category", categoryRoute);
v1Routes.use("/product", productRoute);
v1Routes.use("/user", userRoute);

module.exports = v1Routes;
