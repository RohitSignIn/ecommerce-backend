const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const CartProductService = require("../services/cart_product_service");
const CartProductRepository = require("../repository/cart_product_repository");

const errorResponse = require("../utils/error_response");
const successResponse = require("../utils/success_response");

const cartProductService = new CartProductService(new CartProductRepository());

async function fetch(req, res) {
  try {
    const response = await cartProductService.fetch(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(successResponse("CartProduct", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function update(req, res) {
  try {
    const response = await cartProductService.update(req.body);
    return res
      .status(StatusCodes.ACCEPTED)
      .json(successResponse("CartProduct", ReasonPhrases.ACCEPTED, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function remove(req, res) {
  try {
    const response = await cartProductService.remove(req.params.id);
    return res
      .status(StatusCodes.ACCEPTED)
      .json(successResponse("CartProduct", "Deleted Successfully", response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

module.exports = {
  fetch,
  update,
  remove,
};
