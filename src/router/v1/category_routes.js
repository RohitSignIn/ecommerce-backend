const categoryRoute = require("express").Router();

const {
  create,
  fetchAll,
  remove,
  fetchProductsByCategory,
} = require("../../controllers/category_controller");

categoryRoute.post("/", create);
categoryRoute.get("/", fetchAll);
categoryRoute.get("/:name", fetchProductsByCategory);
categoryRoute.delete("/:id", remove);

module.exports = categoryRoute;
