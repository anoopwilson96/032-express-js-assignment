const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
  bookName: String,
  bookAuthor: String,
  bookImage: String,
  authorId: String,
  description: String,
  price: Number
})


const Book = mongoose.model('Book', bookSchema);


module.exports = Book