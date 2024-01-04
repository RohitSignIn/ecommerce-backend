const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UnauthorizedError extends Error {
  constructor(message = null) {
    const errorMessage =
      message != null
        ? message
        : "Unauthorized: Chek your login credentials again";
    super(errorMessage);
    this.errorMessage = errorMessage;
    this.statusCode = StatusCodes.UNAUTHORIZED;
    this.reason = ReasonPhrases.UNAUTHORIZED;
    this.name = "UnauthorizedError";
  }
}

module.exports = UnauthorizedError;
