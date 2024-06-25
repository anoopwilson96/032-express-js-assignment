const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
  bookName: String,
  bookAuthor: String,
  description: String,
  price: Number,
  authorId: Number
})


const Book = mongoose.model('Book', bookSchema);


module.exports = Book