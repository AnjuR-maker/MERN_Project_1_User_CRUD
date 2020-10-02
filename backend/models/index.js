const mongoose = require('mongoose')
const cors = require('cors')
const Schema = mongoose.Schema

newSchema = new Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model('User',newSchema)