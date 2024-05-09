const express = require('express')
const { getBooks, getBookById, addBook, patchBook, deleteBook } = require('./controllers/bookControllers')
const router = express.Router()


// Get all books.

router.get('/', getBooks)

// Get book by Id.

router.get('/:bookId', getBookById)

// Add a new book.

router.post('/:bookId', addBook)

// Update book details.

router.patch('/:bookId', patchBook)

// Delete a book.

router.delete('/:bookId', deleteBook)





module.exports = router