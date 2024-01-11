const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class CartProductService {
  constructor(CartProductRepository) {
    this.CartProductRepository = CartProductRepository;
  }

  async update(data) {
    try {
      const response = await this.CartProductRepository.create(
        data.cartId,
        data.productId,
        data.shouldAdd
      );
      return response;
    } catch (error) {
      console.log("CartProduct Service error" + error);
      throw new InternalServerError();
    }
  }

  async fetch(cartId) {
    try {
      const response = await this.CartProductRepository.fetch(cartId);
      if (!response) {
        throw new NotFoundError("Cart Service", "fetch", cartId);
      }
      return response;
    } catch (error) {
      console.log("CartProduct Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }

  async remove(cartId) {
    try {
      const response = await this.CartProductRepository.remove(cartId);
      return response;
    } catch (error) {
      console.log("CartProduct Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }
}

module.exports = CartProductService;
