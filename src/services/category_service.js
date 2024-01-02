const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class CategoryService {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async create(category) {
    try {
      const response = await this.categoryRepository.create(
        category.name,
        category.description
      );
      return response;
    } catch (error) {
      console.log("Category Service error" + error);
      throw new InternalServerError();
    }
  }

  async fetchAll() {
    try {
      const response = await this.categoryRepository.fetch();
      if (!response.length) throw new NotFoundError("Category", "fetch", "all");
      return response;
    } catch (error) {
      console.log("Category Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async fetchProductsByCategory(name) {
    try {
      const response = await this.categoryRepository.fetchProductsByCategory(
        name
      );
      if (!response) {
        throw new NotFoundError("CategoryProduct", "name", name);
      }
      return response;
    } catch (error) {
      console.log("Category Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async remove(id) {
    try {
      const response = await this.categoryRepository.remove(id);
      return response;
    } catch (error) {
      console.log("Category Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }
}

module.exports = CategoryService;
