const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const { NODE_ENV } = require("../config/server_config");

const UserService = require("../services/user_service");
const UserRepository = require("../repository/user_repository");

const errorResponse = require("../utils/error_response");
const successResponse = require("../utils/success_response");

const userService = new UserService(new UserRepository());

async function fetchAll(req, res) {
  try {
    const response = await userService.fetchAll();
    return res
      .status(StatusCodes.OK)
      .json(successResponse("user", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function fetchById(req, res) {
  try {
    const response = await userService.fetchById(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(successResponse("user", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function create(req, res) {
  try {
    const response = await userService.create(req.body);
    return res
      .status(StatusCodes.CREATED)
      .json(successResponse("user", ReasonPhrases.CREATED, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function remove(req, res) {
  try {
    const response = await userService.remove(req.params.id);
    return res
      .status(StatusCodes.ACCEPTED)
      .json(successResponse("user", "Deleted Successfully", response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function login(req, res) {
  try {
    const response = await userService.login(req.body);

    res.cookie("token", response, {
      httpOnlly: true,
      secure: NODE_ENV == "production",
    });

    return res
      .status(StatusCodes.OK)
      .json(
        successResponse(
          "user",
          "Successfully signed in",
          NODE_ENV == "production" ? true : response
        )
      );
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

module.exports = {
  fetchAll,
  fetchById,
  create,
  remove,
  login,
};
