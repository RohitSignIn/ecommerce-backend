const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class UserConflictError extends Error {
  constructor(message = null) {
    const errorMessage =
      message != null ? message : "AccountConflict: Email Already Exists";
    super(errorMessage);
    this.errorMessage = errorMessage;
    this.statusCode = StatusCodes.CONFLICT;
    this.reason = ReasonPhrases.CONFLICT;
    this.name = "UserConflictError";
  }
}

module.exports = UserConflictError;
