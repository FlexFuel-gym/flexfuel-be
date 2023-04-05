require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 10000

const ProductRouter = require('./routes/product.router')

const app = express()

app.use(express.json())
app.use('/api/product', ProductRouter)

const start = async () => {
  await mongoose.connect(process.env.MONGO_LINK).then(() => {
    console.log('Connected to mongoDB')
  });

  app.listen(PORT, () => {
    console.log(`Server success start: http://localhost:${PORT}`)
  })
}

start()