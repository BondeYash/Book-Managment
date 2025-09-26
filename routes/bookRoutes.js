import express from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  searchBooksByAuthor,
} from "../controllers/book.controllers.js";

import { bookValidationRules } from "../validators/bookValidators.js";
import { validateRequest } from "../middleware/validateRequest.js";


const router = express.Router();

router.get("/books", getBooks);

router.get("/books/search", searchBooksByAuthor);

router.get("/books/:id", getBookById);


router.post("/book", bookValidationRules, validateRequest, createBook);

router.put("/books/:id", bookValidationRules, validateRequest, updateBook);


router.delete("/books/:id", deleteBook);

export default router;
