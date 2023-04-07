require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 10000

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