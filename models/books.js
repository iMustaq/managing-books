const Schema = require('mongoose').Schema

exports.books = new Schema({
    title: String,
    author: String,
    summary: String
})
