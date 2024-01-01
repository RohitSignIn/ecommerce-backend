const productRoute = require("express").Router();

const {
  create,
  fetchAll,
  fetchById,
  remove,
} = require("../../controllers/product_controller");

productRoute.post("/", create);
productRoute.get("/", fetchAll);
productRoute.get("/:id", fetchById);
productRoute.delete("/:id", remove);

module.exports = productRoute;
