import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id : { type: String, },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year : { type: Number, required: true }
})

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;
