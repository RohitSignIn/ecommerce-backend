const cartProductRoute = require("express").Router();

const {
  fetch,
  update,
  remove,
} = require("../../controllers/cart_product_controller");

cartProductRoute.get("/:id", fetch);
cartProductRoute.post("/", update);
cartProductRoute.delete("/:id", remove);

module.exports = cartProductRoute;
