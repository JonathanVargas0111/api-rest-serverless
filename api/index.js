const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
//Paquete que permite utilizar el appi desde un lugar distinto al dominio
const cors = require('cors')
const orders = require('./routes/orders')
const auth = require('./routes/auth')

const meals = require('./routes/meals')
const app = express()
//Para aceptar solicitudes de tipo json
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true,seUnifiedTopology: true })

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

module.exports = app
