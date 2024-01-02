const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const CategoryService = require("../services/category_service");
const CategoryRepository = require("../repository/category_repository");

const errorResponse = require("../utils/error_response");
const successResponse = require("../utils/success_response");

const categoryService = new CategoryService(new CategoryRepository());

async function create(req, res) {
  try {
    const response = await categoryService.create(req.body);
    return res
      .status(StatusCodes.CREATED)
      .json(successResponse("Category", ReasonPhrases.CREATED, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function fetchAll(req, res) {
  try {
    const response = await categoryService.fetchAll();
    return res
      .status(StatusCodes.OK)
      .json(successResponse("Category", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function fetchProductsByCategory(req, res) {
  try {
    const response = await categoryService.fetchProductsByCategory(
      req.params.name
    );
    return res
      .status(StatusCodes.OK)
      .json(successResponse("user", ReasonPhrases.OK, response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

async function remove(req, res) {
  try {
    const response = await categoryService.remove(req.params.id);
    return res
      .status(StatusCodes.ACCEPTED)
      .json(successResponse("Category", "Deleted Successfully", response));
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

module.exports = {
  create,
  remove,
  fetchAll,
  fetchProductsByCategory,
};
