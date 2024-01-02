const { productModel } = require("../models/index");
const NotFoundError = require("../errors/not_found_error");

class ProductRepository {
  async create(title, price, description, image, categoryId) {
    try {
      const response = await productModel.create({
        title,
        price,
        description,
        image,
        categoryId,
      });
      // response.setCategory(categoryId);
      return response;
    } catch (error) {
      console.log("Product Repository Error: " + error);
      throw error;
    }
  }

  async fetch(id = null) {
    try {
      let response;
      if (id != null) {
        response = await productModel.findOne({ where: { id: id } });
      } else {
        response = await productModel.findAll();
      }
      return response;
    } catch (error) {
      console.log("Product Repository Error: " + error);
      throw error;
    }
  }

  async remove(id) {
    try {
      const product = await productModel.findOne({ where: { id: id } });
      if (!product) throw new NotFoundError("Product", "id", id);
      const response = await product.destroy();
      return response;
    } catch (error) {
      console.log("Product Repository Error: " + error);
      throw error;
    }
  }
}

module.exports = ProductRepository;
