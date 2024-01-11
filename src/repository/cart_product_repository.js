const cartProductModel = require("../models/cart_product_model");
const NotFoundError = require("../errors/not_found_error");
const { Op } = require("sequelize");

class CartProductRepository {
  async fetch(cartId) {
    try {
      const response = await cartProductModel.findAll({ where: { cartId } });
      if (!response) throw new NotFoundError("CartProduct", "fetch", id);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async update(cartId, productId, shouldAdd) {
    try {
      const response = await cartProductModel.findAll({ where: { cartId } });

      if (shouldAdd) {
        if (!response) {
          await cartProductModel.create({ cartId, productId });
        } else {
          response.increment("quantity", { by: 1 });
        }
      } else {
        if (!response) {
          throw new NotFoundError("CartProduct", "update", id);
        }

        if (response.quantity == 1) {
          await response.destroy({
            where: {
              [Op.and]: [{ cartId }, { productId }],
            },
          });
        } else {
          await response.increment("quantity", { by: -1 });
        }
      }

      const updatedCart = cartProductModel.findAll({ where: { cartId } });

      return {
        cartId: cartId,
        products: updatedCart,
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(cartId) {
    try {
      const cart = await cartModel.findOne({ where: { cartId } });
      if (!cart) throw new NotFoundError("Cart", "id", cartId);
      const response = await cart.destroy();
      return response;
      if (!response) throw new NotFoundError("Cart", "cart", id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartProductRepository;
