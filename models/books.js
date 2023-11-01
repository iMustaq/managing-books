const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const scheema = new Schema(
  {
    title: String,
    author: String,
    summary: String,
  },
  { timestamps: true }
);

const books = mongoose.model("books", scheema);

module.exports = { books };
