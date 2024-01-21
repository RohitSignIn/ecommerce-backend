const categoryRoute = require("express").Router();

const {
  create,
  fetchAll,
  remove,
  fetchProductsByCategory,
} = require("../../controllers/category_controller");
const isLoggedIn = require("../../middleware/auth_middleware");

categoryRoute.get("/", fetchAll);
categoryRoute.get("/:name", fetchProductsByCategory);

categoryRoute.post("/", isLoggedIn, create);
categoryRoute.delete("/:id", isLoggedIn, remove);

module.exports = categoryRoute;
