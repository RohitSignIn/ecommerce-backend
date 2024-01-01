const categoryRoute = require("express").Router();

const {
  create,
  fetchAll,
  fetchById,
  remove,
} = require("../../controllers/category_controller");

categoryRoute.post("/", create);
categoryRoute.get("/", fetchAll);
categoryRoute.get("/:id", fetchById);
categoryRoute.delete("/:id", remove);

module.exports = categoryRoute;
