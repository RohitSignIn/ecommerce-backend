const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_SECRET, TOKEN_EXPIRY } = require("../config/server_config");

const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");
const UnauthorizedError = require("../errors/unauthorized_error");
const ValidationError = require("../errors/validation_error");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(user) {
    try {
      const response = await this.userRepository.create(
        user.email,
        user.password
      );
      return response;
    } catch (error) {
      console.log("User Service error" + error);
      if (error.name === "SequelizeValidationError")
        throw new ValidationError(error.message);
      throw new InternalServerError();
    }
  }

  async fetchAll() {
    try {
      const response = await this.userRepository.fetch();
      if (!response.length) throw new NotFoundError("User", "fetch", "all");
      return response;
    } catch (error) {
      console.log("User Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async fetchById(id) {
    try {
      const response = await this.userRepository.fetch(id);
      if (!response) {
        throw new NotFoundError("User", "id", id);
      }
      return response;
    } catch (error) {
      console.log("User Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async remove(id) {
    try {
      const response = await this.userRepository.remove(id);
      return response;
    } catch (error) {
      console.log("User Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async login(user) {
    try {
      const response = await this.userRepository.fetchByEmail(user.email);
      if (!response) throw new UnauthorizedError();

      const authorized = bcrypt.compareSync(user.password, response.password);

      if (!authorized) throw new UnauthorizedError();

      const token = jwt.sign(
        {
          id: response.id,
          email: response.email,
        },
        JWT_SECRET,
        { expiresIn: TOKEN_EXPIRY }
      );

      return token;
    } catch (error) {
      console.log("User Service error" + error);
      if (
        error.name === "NotFoundError" ||
        error.name === "UnauthorizedError"
      ) {
        throw error;
      }
      throw new InternalServerError();
    }
  }
}

module.exports = UserService;
