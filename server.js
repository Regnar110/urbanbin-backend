const express = require('express')
const bodyParser = require ('body-parser') // body parser pozwala na odczytanie body przychodzącego requestu
const cors = require('cors') // cross origin resource sharing
const { sendMail } = require('./controllers/sendmail/sendmail.js')
const { ProductsGet } = require('./controllers/Products/ProductsGet.js')
require('dotenv').config();

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json('db')
})

app.get('/test', (req, res) => {
  res.json('connected')
})

app.post('/mgbs', async (req, res) => {
  const { model } = req.body
  ProductsGet(model, req, res)
})


app.post('/sendmail', (req, res) => sendMail(req, res))
const PORT = process.env.PORT


app.listen(PORT, () => {
  console.log(`listenning on ${PORT}`)
})