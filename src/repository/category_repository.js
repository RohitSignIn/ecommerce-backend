const NotFoundError = require("../errors/not_found_error");
const categoryModel = require("../models/category_model");

class categoryRepository {
  async create(name, description) {
    try {
      const response = await categoryModel.create({
        name,
        description,
      });
      return response;
    } catch (error) {
      console.log("Category Repository Error: " + error);
      throw error;
    }
  }

  async fetch(id = null) {
    try {
      let response;
      if (id != null) {
        response = await categoryModel.findOne({ where: { id: id } });
      } else {
        response = await categoryModel.findAll();
      }
      return response;
    } catch (error) {
      console.log("Category Repository Error: " + error);
      throw error;
    }
  }

  async remove(id) {
    try {
      const category = await categoryModel.findOne({ where: { id: id } });
      if (!category) throw new NotFoundError("Category", "id", id);
      const response = await category.destroy();
      return response;
    } catch (error) {
      console.log("Category Repository Error: " + error);
      throw error;
    }
  }
}

module.exports = categoryRepository;
