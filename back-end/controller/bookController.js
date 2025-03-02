const Book = require("../models/Book");

// Get all books for the logged-in user
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Add a new book
const addBook = async (req, res) => {
  const { title, author, category } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      category,
      user: req.user.id, // Associate the book with the logged-in user
    });

    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a book
const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    // Check if the book exists
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Check if the logged-in user owns the book
    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    await book.remove();
    res.json({ message: "Book deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getBooks,
  addBook,
  deleteBook,
};