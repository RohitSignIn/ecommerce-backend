const cartRoute = require("express").Router();
const isLoggedIn = require("../../middleware/auth_middleware");

const {
  fetchAll,
  fetchById,
  create,
  remove,
} = require("../../controllers/cart_controller");

cartRoute.get("/", fetchAll);
cartRoute.get("/:id", fetchById);

cartRoute.post("/", isLoggedIn, create);
cartRoute.delete("/:id", isLoggedIn, remove);

module.exports = cartRoute;
