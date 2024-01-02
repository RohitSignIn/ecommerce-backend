const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class ValidationError extends Error {
  constructor(message) {
    const errorMessage = message;
    super(errorMessage);
    this.errorMessage = errorMessage;
    this.statusCode = StatusCodes.FORBIDDEN;
    this.reason = ReasonPhrases.FORBIDDEN;
    this.name = "ValidationError";
  }
}

module.exports = ValidationError;
