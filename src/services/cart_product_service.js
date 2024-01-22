const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class CartProductService {
  constructor(CartProductRepository, CartRepository) {
    this.CartProductRepository = CartProductRepository;
    this.CartRepository = CartRepository;
  }

  async update(data, userId) {
    try {
      let cartExist = await this.CartRepository.fetchByuserId(userId);
      if (!cartExist) {
        cartExist = await this.CartRepository.create(userId);
      }
      const response = await this.CartProductRepository.update(
        cartExist.id,
        data.productId,
        data.shouldAdd
      );
      return response;
    } catch (error) {
      console.log("CartProduct Service error" + error);
      throw new InternalServerError();
    }
  }

  async fetch(userId) {
    try {
      let cartExist = await this.CartRepository.fetchByuserId(userId);
      if (!cartExist) {
        cartExist = await this.CartRepository.create(userId);
      }
      const response = await this.CartProductRepository.fetch(cartExist.id);
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

  async remove(userId) {
    try {
      const response = await this.CartProductRepository.remove(userId);
      return response;
    } catch (error) {
      console.log("CartProduct Service error" + error);
      if (error.name === "NotFoundError") throw error;
      throw new InternalServerError();
    }
  }
}

module.exports = CartProductService;
