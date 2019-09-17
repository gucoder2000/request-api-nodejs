'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: String,
    picture: String,
    precio: Number,
    category: { type : String, enum : ['computers' , 'phones' , 'test']},
    description : String
})

module.exports = mongoose.model('Product' , ProductSchema);
