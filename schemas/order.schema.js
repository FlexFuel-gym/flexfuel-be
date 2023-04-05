const {Schema, model} = require('mongoose')

const orderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  customerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'customer',
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'product',
  }
})

module.exports = model('order', orderSchema)