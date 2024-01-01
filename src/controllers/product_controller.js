const errorResponse = require("../utils/error_response");
const successResponse = require("../utils/success_response");
const ProductService = require("../services/product_service");
const ProductRepository = require("../repository/product_repository");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const productService = new ProductService(new ProductRepository());

async function create(req, res) {
  try {
    const response = await productService.create(req.body);
    return res
      .status(StatusCodes.CREATED)
      .json(successResponse("Product", ReasonPhrases.CREATED, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function fetchAll(req, res) {
  try {
    const response = await productService.fetchAll();
    return res
      .status(StatusCodes.OK)
      .json(successResponse("Product", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function fetchById(req, res) {
  try {
    const response = await productService.fetchById(req.params.id);
    return res
      .status(StatusCodes.OK)
      .json(successResponse("Product", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function remove(req, res) {
  try {
    const response = await productService.remove(req.params.id);
    return res
      .status(StatusCodes.ACCEPTED)
      .json(successResponse("Product", "Deleted Successfully", response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

module.exports = {
  create,
  fetchAll,
  fetchById,
  remove,
};
