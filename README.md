# 📚 Book Management System

[![Node.js](https://img.shields.io/badge/Node.js-16.x-green?style=flat-square)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue?style=flat-square)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=flat-square)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

## Description
The **Book Management System** is a RESTful API that allows users to manage a collection of books efficiently.  
Users can add, update, delete, and search for books by author.  
The system is perfect for personal collections, small libraries, or educational projects.

Key goals:  
- Efficient management of book data.  
- Flexible searching and pagination.  
- Input validation and robust error handling.

---

## Features
- **Add a New Book** – Create a book with `title`, `author`, and `year`.  
- **Delete a Book by ID** – Remove books using their unique ID.  
- **Update a Book by ID** – Modify existing book details.  
- **Search for Books by Author** – Case-insensitive search by author.  
- **Pagination** – Retrieve books page by page with customizable limits.  
- **Input Validation** – Validate all input data using `express-validator`.  
- **Logging** – Request logging using Morgan for better monitoring.  

---

## Technologies Used
- **Programming Language:** JavaScript (ES6)  
- **Framework:** Node.js, Express.js  
- **Database:** MongoDB (NoSQL)  
- **Validation:** express-validator  
- **Logging:** Morgan  
- **Version Control:** Git  
- **Package Manager:** npm  

---

## Installation Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/YourUsername/book-management-system.git
cd book-management-system
````

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

* Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

4. **Run the Server**

```bash
npm start
```

* The API will run on `http://localhost:3000`.

---

## API Usage

### Endpoints

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| GET    | `/books`         | Get all books (supports pagination) |
| GET    | `/books/:id`     | Get a book by ID                    |
| POST   | `/book`          | Add a new book                      |
| PUT    | `/books/:id`     | Update a book by ID                 |
| DELETE | `/books/:id`     | Delete a book by ID                 |
| GET    | `/books?author=` | Search books by author              |

### Example Requests

**Add a New Book**

```bash
curl -X POST http://localhost:3000/book \
-H "Content-Type: application/json" \
-d '{"title":"Atomic Habits","author":"James Clear","year":2018}'
```

**Search Books by Author**

```bash
curl http://localhost:3000/books?author=James%20Clear
```

**Get Books with Pagination**

```bash
curl http://localhost:3000/books?page=1&limit=5
```

**Update a Book**

```bash
curl -X PUT http://localhost:3000/books/<book_id> \
-H "Content-Type: application/json" \
-d '{"title":"Updated Title","author":"New Author","year":2022}'
```

**Delete a Book**

```bash
curl -X DELETE http://localhost:3000/books/<book_id>
```



## Contributing Guidelines

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/YourFeature
```

3. Make your changes and commit:

```bash
git commit -m "Add new feature"
```

4. Push to your branch:

```bash
git push origin feature/YourFeature
```

5. Open a Pull Request.

**Guidelines:**

* Follow consistent code formatting.
* Write meaningful commit messages.
* Ensure your code passes validation and any existing tests.
* Add comments/documentation for any new code.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [express-validator](https://express-validator.github.io/docs/)
* [Morgan](https://www.npmjs.com/package/morgan)

---

## Future Enhancements

* Add **user authentication** to allow only registered users to modify books.
* Add **sorting** by title, author, or year.
* Add **advanced search** with multiple filters (author + year).
* Deploy the API on **cloud platforms** like Heroku or Render.

---

## Contact

For questions or suggestions, reach out to:

* **Author:** Bonde Yash
* **GitHub:** [https://github.com/YourUsername](https://github.com/BondeYash)
* **Email:** [your.email@example.com](mailto:yashbonde21@gmail.com)

```


