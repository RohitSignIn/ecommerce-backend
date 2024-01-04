const userRoute = require("express").Router();
const {
  login,
  create,
  fetchAll,
  fetchById,
  remove,
} = require("../../controllers/user_controller");

userRoute.post("/", create);
// userRoute.get("/", fetchAll);
// userRoute.get("/:id", fetchById);
// userRoute.delete("/:id", remove);

// Login
userRoute.post("/login", login);

module.exports = userRoute;
