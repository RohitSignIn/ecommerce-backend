const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class NotFoundError extends Error {
  constructor(resourceName, property, propertyValue) {
    const errorMessage = `This ${resourceName} with ${property} : ${propertyValue} is not found`;
    super(errorMessage);
    this.errorMessage = errorMessage;
    this.statusCode = StatusCodes.NOT_FOUND;
    this.reason = ReasonPhrases.NOT_FOUND;
    this.name = "NotFoundError";
  }
}

module.exports = NotFoundError;
