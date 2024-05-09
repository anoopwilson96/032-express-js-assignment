
const getBooks = (req, res) => {
  res.send('Code for: Get all books')
}
const getBookById = (req, res) => {
  res.send('Code for: Get book by ID')
}
const addBook = (req, res) => {
  res.send('Code for: Add a new book')
}
const patchBook = (req, res) => {
  res.send('Code for: Update book details')
}
const deleteBook = (req, res) => {
  res.send('Code for: Delete a book')
}



module.exports = {
  getBooks,
  getBookById,
  addBook,
  patchBook,
  deleteBook
}