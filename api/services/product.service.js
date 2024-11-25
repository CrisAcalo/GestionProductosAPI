const boom = require('@hapi/boom');

const { sequelize } = require('../libs/sequelize');

class ProductService {

  constructor() {
    this.model = sequelize.models.Product;
  }

  async create(body) {
    const newProduct = await this.model.create(body);
    return newProduct;
  }

  async find() {
    const rta = await this.model.findAll();
    return rta;
  }

  async findOne(id) {
    const product = await this.model.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    } else {
      return product;
    }
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    if (!product) {
      throw boom.notFound('Product not found');
    } else {
      const rta = await product.update(changes);
      return rta;
    }
  }

  async delete(id) {
    const product = await this.findOne(id);
    if (!product) {
      throw boom.notFound('Product not found');
    } else {
      await product.destroy();
      return {
        id,
        message: 'Product deleted',
      }
    }
  }
}

module.exports = new ProductService();
