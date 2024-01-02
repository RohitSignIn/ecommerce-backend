const { categoryModel } = require("../models/index");
const NotFoundError = require("../errors/not_found_error");

class CategoryRepository {
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

  async fetch() {
    try {
      const response = await categoryModel.findAll();
      return response;
    } catch (error) {
      console.log("Category Repository Error: " + error);
      throw error;
    }
  }

  async fetchProductsByCategory(name) {
    try {
      const category = await categoryModel.findOne({ where: { name: name } });
      if (!category) throw new NotFoundError("Category", "name", name);
      const categoryProducts = await category.getProducts();
      return categoryProducts;
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

module.exports = CategoryRepository;
