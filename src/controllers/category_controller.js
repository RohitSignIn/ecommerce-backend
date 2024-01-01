const errorResponse = require("../utils/error_response");

function addCategory(req, res) {
  try {
    await;
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

function getCategoryById(req, res) {
  try {
    await;
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

function getAllCategory(req, res) {
  try {
    await;
  } catch (error) {
    res.status(error.statusCode).json(errorResponse(error.reason, error));
  }
}

module.exports = {
  addCategory,
  getAllCategory,
  getCategoryById,
};
