const {Schema, model} = require('mongoose')

const schedule = {
  periodOfTime: String,
  isAvailable: Boolean
}

const coachSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  image: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  pricePerMonth: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  schedule: {
    type: [schedule],
    required: true
  }
})

module.exports = model('coach', coachSchema)