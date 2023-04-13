const {Schema, model} = require('mongoose')

const productOrderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  customerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'product-customer',
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'product',
  }
})

module.exports = model('product-order', productOrderSchema)