const route = require('express').Router()
const bookController = require('../controllers/book.controllers')

route.get('/',bookController.createBooks)


module.exports = route