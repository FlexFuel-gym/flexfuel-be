const mongoose = require('mongoose')
const ProductSchema = require('../schemas/product.schema')
const CustomerSchema = require('../schemas/customer.schema')
const OrderSchema = require('../schemas/order.schema')
const CustomerDto = require('../dtos/customer.dto')
const ProductDto = require('../dtos/product.dto')
const OrderDto = require('../dtos/order.dto')

class ProductService {
  async getProducts(page = 1, count = 10) {
    const startsFrom = (page - 1) * count
    const products = await ProductSchema.find().skip(startsFrom).limit(count)
    const totalItems = await ProductSchema.count();

    return {
      products: products.map((product) => new ProductDto(product)),
      pagination: {
        currentPage: +page,
        itemsPerPage: +count,
        totalItems
      }
    }
  }

  async getProduct(productId) {
    const product = await ProductSchema.findById(productId)

    if (!product) {
      throw new Error('Product is not defined!')
    }

    return {
      product: new ProductDto(product),
    }
  }

  async buyProduct(productId, customerData) {
    if (!productId) {
      throw new Error('productId field is not defined!')
    }

    if (!customerData) {
      throw new Error('customerData field is not defined!')
    }

    const isProductExist = await ProductSchema.findById(productId)

    if (!isProductExist) {
      throw new Error('Product is not defined!')
    }

    const customer = await CustomerSchema.create({
      _id: new mongoose.Types.ObjectId(),
      ...customerData
    })
    const order = await OrderSchema.create({
      _id: new mongoose.Types.ObjectId(),
      customerId: customer._id,
      productId,
    })

    return {
      customer: new CustomerDto(customer),
      order: new OrderDto(order)
    }
  }
}

module.exports = new ProductService()