const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const DB = require("../config/db_config");
const { SALT_ROUND } = require("../config/server_config");

const userModel = DB.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        args: true,
        msg: "Invalid email",
      },
    },
  },
  password: {
    type: DataTypes.STRING(64),
    validate: {
      is: {
        args: /^(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,15}$/i,
        msg: "Invalid password",
      },
    },
  },
});

userModel.beforeCreate(async (user) => {
  const hash = bcrypt.hashSync(user.password, +SALT_ROUND);
  user.password = hash;
});

module.exports = userModel;
