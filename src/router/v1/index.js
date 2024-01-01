const v1Routes = require("express").Router();
const categoryRoute = require("./category_routes");

v1Routes.use("/category", categoryRoute);

module.exports = v1Routes;
