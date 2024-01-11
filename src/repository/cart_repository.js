const { cartModel } = require("../models/index");
const NotFoundError = require("../errors/not_found_error");

class CartRepository {
  async fetch() {
    try {
      const response = await cartModel.findAll();
      if (!response) throw new NotFoundError("Cart", "fetch", "all");
      return response;
    } catch (error) {
      throw error;
    }
  }

  async fetch(id) {
    try {
      const response = await cartModel.findByPk({ id: cartId });
      if (!response) throw new NotFoundError("Cart", "cart", id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async create(userId) {
    try {
      const response = await cartModel.create({ userId });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async remove(cartId) {
    try {
      const cart = await cartModel.findOne({ where: { id: cartId } });
      if (!cart) throw new NotFoundError("Cart", "id", id);
      const response = await cart.destroy();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartRepository;
