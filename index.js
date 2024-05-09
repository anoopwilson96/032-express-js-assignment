
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get all books/author
// Get book/author by Id
// Add a new book/author
// Update book/author details
// Delete book/author



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})