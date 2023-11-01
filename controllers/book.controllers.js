const { books } = require("../models/books");

// create new books
exports.createBooks = async (req, res) => {
  try {
    let { title, author, summary } = req.body;

    const createBook = await books.create({
      author,
      title,
      summary,
    });

    return res.json({ result: createBook });
  } catch (error) {
    return res.json({ error: true, message: error.toString() });
  }
};

// get ALL books list or book by id
exports.getBookById = async (req, res) => {
  try {
    let { id } = req.body;

    id = id ? { _id: id } : {};

    const listOfBooks = await books.find(id);

    return res.json({ result: listOfBooks });
  } catch (error) {
    return res.json({ error: true, message: error.toString() });
  }
};

// update by id
exports.updateBookDetails = async (req, res) => {
  try {
    const { title, summary, author, id } = req.body;

    const update = await books.findByIdAndUpdate(id, {
      author,
      title,
      summary,
    });

    if (!update) {
      throw new Error(`No books found for the given id!! could not update.`);
    }

    return res
      .status(200)
      .json({ error: false, message: "updated sucessfully", result: update });
  } catch (error) {
    return res.json({ error: true, message: error.toString() });
  }
};

// Delete by id
exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.body;

    const isDeleted = await books.findByIdAndDelete(id);

    if (!isDeleted) {
      throw new Error(`No books found for the given id to delete`);
    }

    return res.status(200).json({
      error: false,
      message: `Data deleted for id - ${id}`,
      result: isDeleted,
    });
  } catch (error) {
    return res.json({ error: true, message: error.toString() });
  }
};
