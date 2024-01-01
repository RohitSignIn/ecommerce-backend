const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async create(product) {
    try {
      const response = await this.productRepository.create(
        product.title,
        product.price,
        product.description,
        product.image
      );
      return response;
    } catch (error) {
      console.log("Product Service error" + error);
      throw new InternalServerError();
    }
  }

  async fetchAll() {
    try {
      const response = await this.productRepository.fetch();
      if (!response.length) throw new NotFoundError("Product", "fetch", "all");
      return response;
    } catch (error) {
      console.log("Product Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async fetchById(id) {
    try {
      const response = await this.productRepository.fetch(id);
      if (!response) {
        console.log("Hello");
        throw new NotFoundError("Product", "id", id);
      }
      return response;
    } catch (error) {
      console.log("Product Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async remove(id) {
    try {
      const response = await this.productRepository.remove(id);
      return response;
    } catch (error) {
      console.log("Product Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }
}

module.exports = ProductService;
