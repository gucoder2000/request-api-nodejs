
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RequestSchema = Schema({
    url: String
})

module.exports = mongoose.model('Request' , RequestSchema)