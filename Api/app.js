const express = require("express")


//rutas
const cors = require("cors")
const bodyParser = require('body-parser');

const app = express()

app.use(cors())
app.use(express.json())



module.exports = app;