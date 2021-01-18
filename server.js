const express = require('express')
const bodyParser = require ('body-parser') // body parser pozwala na odczytanie body przychodzącego requestu
const cors = require('cors') // cross origin resource sharing
const { sendMail } = require('./controllers/sendmail/sendmail.js')
const { ProductsGet } = require('./controllers/Products/ProductsGet.js')

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.post('/mgbs', async (req, res) => {
  const { model } = req.body
  ProductsGet(model, req, res)
})


app.post('/sendmail', (req, res) => sendMail(req, res))

app.listen(process.env.PORT , () => {
  console.log(`listenning on ${process.env.PORT}`)
})