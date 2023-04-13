const {Schema, model} = require('mongoose')

const coachCustomerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  periodOfTime: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true,
  }
})

module.exports = model('coach-customer', coachCustomerSchema)