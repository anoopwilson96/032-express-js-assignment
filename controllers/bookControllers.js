

const Book = require("../model/bookModel")


//to get all books

const getBooks = async (req, res) => {
  try {
  const books =  await Book.find({})
    res.status(200).json(books)

  } catch (error) {
    res.status(404).send('Error: Not found')
  }
}

//get book by ID

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params).exec();
    res.status(200).json(book)
  } catch (error) {
    res.status(404).send('Error: Not found')
  }
}

// add new book

const addBook = async (req, res) => {
  try {
    const bookData = req.body
    const book = await new Book (bookData);
                     await book.save();
    res.status(200).json(book)
  } catch (error) {
    res.status(404).send('Error: Failed to add')
  }
}

// Edit or patch existing book details

const patchBook = async (req, res) => {
 try {
  const updatedBook = await Book.findByIdAndUpdate(req.params.bookId,req.body, {new:true})

   res.status(200).json(updatedBook)

 } catch (error) {
  res.status(404).send('Error: Failed to update')
 }
}
const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.bookId)
    res.status(200).send('Deleted the book')
  } catch (error) {
    res.status(404).send('Error: Failed to delete')
  }
}

module.exports = {
  getBooks,
  getBookById,
  addBook,
  patchBook,
  deleteBook
}