const { ReasonPhrases, StatusCodes } = require("http-status-codes");
var jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/server_config");
const UnauthorizedError = require("../errors/unauthorized_error");
const errorResponse = require("../utils/error_response");

const isLoggedIn = (req, res, next) => {
  if (!req.cookies || !req.cookies.token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(
        errorResponse(
          ReasonPhrases.UNAUTHORIZED,
          new UnauthorizedError("Unauthorized: try login first")
        )
      );
  }

  let user;
  try {
    user = jwt.verify(req.cookies.token, JWT_SECRET);
  } catch (error) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(
        errorResponse(
          ReasonPhrases.UNAUTHORIZED,
          new UnauthorizedError("Unauthorized: try login first")
        )
      );
  }

  req.user = user;
  req.id = user.id;

  next();
};

module.exports = isLoggedIn;
