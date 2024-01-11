const cartRoute = require("express").Router();

const {
  fetchAll,
  fetchById,
  create,
  remove,
} = require("../../controllers/cart_controller");

cartRoute.get("/", fetchAll);
cartRoute.get("/:id", fetchById);
cartRoute.post("/", create);
cartRoute.delete("/:id", remove);

module.exports = cartRoute;
