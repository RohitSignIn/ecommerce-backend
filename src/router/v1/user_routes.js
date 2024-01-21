const userRoute = require("express").Router();
const isLoggedIn = require("../../middleware/auth_middleware");

const {
  login,
  create,
  fetchAll,
  fetchById,
  remove,
} = require("../../controllers/user_controller");

userRoute.get("/", fetchAll);
userRoute.get("/:id", fetchById);
userRoute.post("/", create);

userRoute.delete("/:id", isLoggedIn, remove);

// Login
userRoute.post("/login", login);

module.exports = userRoute;
