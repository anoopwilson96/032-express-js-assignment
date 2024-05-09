const express = require('express')
const router = express.Router()


// Get all books.

app.get('/', (req, res) => {
  res.send('Code for: Get all books')
})

// Get book by Id.

app.get('/:bookId', (req, res) => {
  res.send('Code for: Get book by ID')
})

// Add a new book.

app.post('/:bookId', (req, res) => {
  res.send('Code for: Add a new book')
})

// Update book details.

app.patch('/:bookId', (req, res) => {
  res.send('Code for: Update book details')
})

// Delete a book.

app.delete('/:bookId', (req, res) => {
  res.send('Code for: Delete a book')
})





module.exports = router