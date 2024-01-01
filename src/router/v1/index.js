const v1Routes = require("express").Router();

v1Routes.use("/category");
v1Routes.use("/products");
v1Routes.use("/users");

module.exports = v1Routes;
