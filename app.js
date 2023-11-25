const express = require("express")
const cors = require("cors")
const mailRoute = require("./routes/mailRoute")
const app = express()

app.use(cors())
app.options('*',cors())

app.use(express.json())
app.use('/api/v1/auth',mailRoute);



module.exports = app;