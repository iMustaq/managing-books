const route = require("express").Router();
const bookController = require("../controllers/book.controllers");

route.post("/create-new-book", bookController.createBooks);
route.post("/fetch-book-details", bookController.getBookById);
route.post("/update-book-details", bookController.updateBookDetails);
route.post("/delete-book-by-id", bookController.deleteBookById);

module.exports = route;