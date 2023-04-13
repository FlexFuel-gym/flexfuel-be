const {Schema, model} = require('mongoose')

const coachOrderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  customerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'coach-customer',
  },
  coachId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'coach',
  }
})

module.exports = model('coach-order', coachOrderSchema)