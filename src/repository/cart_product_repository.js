const cartProductModel = require("../models/cart_product_model");
const NotFoundError = require("../errors/not_found_error");
const { Op } = require("sequelize");
const { cartModel } = require("../models");

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
      const response = await cartProductModel.findOne({
        where: { [Op.and]: [{ cartId }, { productId }] },
      });

      if (shouldAdd) {
        if (!response) {
          await cartProductModel.create({ cartId, productId, quantity: 1 });
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

      const updatedCart = await cartProductModel.findAll({ where: { cartId } });

      return {
        cartId: cartId,
        products: updatedCart,
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(userId) {
    try {
      const cart = await cartModel.findOne({ where: { userId } });
      if (!cart) throw new NotFoundError("Cart user", "id", userId);
      const response = await cart.destroy();
      if (!response) throw new NotFoundError("Cart", "cart", id);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartProductRepository;
