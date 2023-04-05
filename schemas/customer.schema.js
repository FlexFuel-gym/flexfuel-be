const {Schema, model} = require('mongoose')

const customerSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
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

module.exports = model('customer', customerSchema)