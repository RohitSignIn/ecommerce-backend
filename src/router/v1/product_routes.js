const productRoute = require("express").Router();
const isLoggedIn = require("../../middleware/auth_middleware");

const {
  create,
  fetchAll,
  fetchById,
  remove,
} = require("../../controllers/product_controller");

productRoute.get("/", fetchAll);
productRoute.get("/:id", fetchById);

productRoute.post("/", isLoggedIn, create);
productRoute.delete("/:id", isLoggedIn, remove);

module.exports = productRoute;
