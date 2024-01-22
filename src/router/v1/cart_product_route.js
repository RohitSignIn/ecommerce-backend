const cartProductRoute = require("express").Router();
const isLoggedIn = require("../../middleware/auth_middleware");

const {
  fetch,
  update,
  remove,
} = require("../../controllers/cart_product_controller");

cartProductRoute.get("/", isLoggedIn, fetch);

cartProductRoute.post("/", isLoggedIn, isLoggedIn, update);
cartProductRoute.delete("/", isLoggedIn, isLoggedIn, remove);

module.exports = cartProductRoute;
