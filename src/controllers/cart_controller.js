const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const CartService = require("../services/cart_service");
const CartRepository = require("../repository/cart_repository");

const errorResponse = require("../utils/error_response");
const successResponse = require("../utils/success_response");

const cartService = new CartService(new CartRepository());

async function fetchAll(req, res) {
  try {
    const response = await cartService.fetchAll();
    return res
      .status(StatusCodes.OK)
      .json(successResponse("Cart", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function fetchById(req, res) {
  try {
    const response = await cartService.fetchById(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(successResponse("Cart", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function create(req, res) {
  try {
    const response = await cartService.create(req.body);
    return res
      .status(StatusCodes.CREATED)
      .json(successResponse("Cart", ReasonPhrases.CREATED, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function remove(req, res) {
  try {
    const response = await cartService.remove(req.params.id);
    return res
      .status(StatusCodes.ACCEPTED)
      .json(successResponse("Cart", "Deleted Successfully", response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

module.exports = {
  fetchAll,
  fetchById,
  create,
  remove,
};
