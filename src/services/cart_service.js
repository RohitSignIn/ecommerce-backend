const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class CartService {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async create(userId) {
    try {
      const response = await this.cartRepository.create(userId);
      return response;
    } catch (error) {
      console.log("Cart Service error" + error);
      throw new InternalServerError();
    }
  }

  async fetchAll() {
    try {
      const response = await this.cartRepository.fetch();
      if (!response.length) throw new NotFoundError("Cart", "fetch", "all");
      return response;
    } catch (error) {
      console.log("Cart Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async fetchById(cartId) {
    try {
      const response = await this.cartRepository.fetch(cartId);
      if (!response) {
        throw new NotFoundError("Cart Service", "fetch", id);
      }
      return response;
    } catch (error) {
      console.log("Cart Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async remove(cartId) {
    try {
      const response = await this.cartRepository.remove(cartId);
      return response;
    } catch (error) {
      console.log("Cart Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }
}

module.exports = CartService;
