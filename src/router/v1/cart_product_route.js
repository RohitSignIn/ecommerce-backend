const cartProductRoute = require("express").Router();
const isLoggedIn = require("../../middleware/auth_middleware");

const {
  fetch,
  update,
  remove,
} = require("../../controllers/cart_product_controller");

cartProductRoute.get("/:id", fetch);

cartProductRoute.post("/", isLoggedIn, update);
cartProductRoute.delete("/:id", isLoggedIn, remove);

module.exports = cartProductRoute;
