require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const cron = require("node-cron");
const PORT = process.env.PORT || 10000

const CoachSchema = require('./schemas/coach.schema')
const ProductRouter = require('./routes/product.router')
const CoachRouter = require('./routes/coach.router')

const app = express()

app.use(express.json())
app.use(cors());
app.use('/api/product', ProductRouter)
app.use('/api/coach', CoachRouter)

const start = async () => {
  await mongoose.connect(process.env.MONGO_LINK).then(() => {
    console.log('Connected to mongoDB')
  });

  app.listen(PORT, () => {
    console.log(`Server success start: http://localhost:${PORT}`)
  })
}

start()

// Runs every day in 24:00
cron.schedule('0 0 0 * * *', async () => {
  console.log('Start updating...')
  const coaches = await CoachSchema.find();

  try {
    for (let coach of coaches) {
      coach.schedule.forEach((i) => {
        i.isAvailable = true
      })

      await coach.save()
    }

    console.log('Success updated!')
  } catch (err) {
    console.log('Error while update coaches: ', err.message)
  }
})