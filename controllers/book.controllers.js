import BookModel from "../models/BookModel.js";


export const getBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, author } = req.query; // default page=1, limit=10
    const filter = {};

    if (author && author.trim() !== "") {
      filter.author = { $regex: `^${author.trim()}$`, $options: "i" }; 
    }

    const books = await BookModel.find(filter)
      .skip((page - 1) * limit) // skip previous pages
      .limit(parseInt(limit));   // limit results per page

    const totalBooks = await BookModel.countDocuments(filter); // total books matching filter

    res.status(200).json({
      page: parseInt(page),
      limit: parseInt(limit),
      totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
      books,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getBookById = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const book = new BookModel({ title, author, year });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const updateBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const updatedBook = await BookModel.findByIdAndUpdate(
      req.params.id,
      { title, author, year },
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const deleteBook = async (req, res) => {
  try {
    const book = await BookModel.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const searchBooksByAuthor = async (req, res) => {
  try {
    const authorQuery = req.query.author?.trim();
    if (!authorQuery) {
      return res.status(400).json({ message: "Author query is required" });
    }

    const filter = {
      author: { $regex: authorQuery, $options: "i" }
    };

    const books = await BookModel.find(filter);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
