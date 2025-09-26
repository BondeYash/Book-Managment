import { body } from "express-validator";


export const bookValidationRules = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2 })
    .withMessage("Title must be at least 2 characters"),

  body("author")
    .trim()
    .notEmpty()
    .withMessage("Author is required")
    .isLength({ min: 2 })
    .withMessage("Author must be at least 2 characters"),

  body("year")
    .notEmpty()
    .withMessage("Year is required")
    .isInt({ min: 1000, max: new Date().getFullYear() })
    .withMessage(`Year must be a valid integer between 1000 and ${new Date().getFullYear()}`)
];
