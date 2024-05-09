
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World of books')
})

// Get all books.
// Get book by Id.
// Add a new book.
// Update book details.
// Delete a book.



// Get all authors.
// Get author by Id.
// Add a new author.
// Update author details.
// Delete author.



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})