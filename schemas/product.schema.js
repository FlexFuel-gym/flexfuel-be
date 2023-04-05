const {Schema, model} = require('mongoose')

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = model('product', productSchema)