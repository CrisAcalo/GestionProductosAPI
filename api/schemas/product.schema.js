//file schemas/product.schema.js
//Id, nombre, descripcion, precio, stock
const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(20);
const descripcion = Joi.string().min(10).max(255);
const precio = Joi.number().integer();
const stock = Joi.number().integer().min(1);

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  descripcion: descripcion.required(),
  precio: precio.required(),
  stock: stock.required()
})

const updateProductSchema = Joi.object({
  nombre: nombre,
  descripcion: descripcion,
  precio: precio,
  stock: stock
})

const getProductSchema = Joi.object({
  id: id.required()
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
