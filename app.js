const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURL} = require("./keys")

mongoose.connect(MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on("connected", () => {
    console.log("Connceted to MONGO")
})
mongoose.connection.on("error", (err) => {
    console.log("Error Connecting", err)
})

require('./models/feedback')

app.use(express.json())
app.use(require('./routes/feedback'))

app.listen(PORT, () => {
    console.log("Server is running on PORT : ", PORT)
})