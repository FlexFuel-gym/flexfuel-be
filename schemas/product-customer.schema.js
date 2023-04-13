const {Schema, model} = require('mongoose')

const productCustomerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  deliveryCompany: {
    type: String,
    required: true
  },
  deliveryCityRef: {
    type: String,
    required: true
  },
  deliveryWarehouse: {
    type: String,
    required: true
  }
})

module.exports = model('product-customer', productCustomerSchema)