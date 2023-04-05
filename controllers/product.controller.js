const ProductService = require('../services/product.service')

class ProductController {
  async getProducts(req, res, next) {
    try {
      const {page, count} = req.query
      const data = await ProductService.getProducts(page, count)

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }

  async getProduct(req, res, next) {
    try {
      const {'product-id': productId} = req.query
      const data = await ProductService.getProduct(productId)

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }

  async buyProduct(req, res, next) {
    try {
      const {productId, customerData} = req.body
      const data = await ProductService.buyProduct(productId, customerData)

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }
}

module.exports = new ProductController()