const userRoute = require("express").Router();
const {
  create,
  fetchAll,
  fetchById,
  remove,
} = require("../../controllers/user_controller");

userRoute.post("/", create);
userRoute.get("/", fetchAll);
userRoute.get("/:id", fetchById);
userRoute.delete("/:id", remove);

module.exports = userRoute;
