// Dependencies
const express = require('express')
const bodyParser = require('body-parser')

// Express setup

let app = express()
const PORT = process.env.PORT || 5050

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('/public'))

// Routes
