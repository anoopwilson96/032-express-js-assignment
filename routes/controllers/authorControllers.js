const getAuthors = (req, res) => {
  res.send('Code for: Get all authors')
}

const getAuthorById = (req, res) => {
  res.send('Code for: Get author by ID')
}

const addAuthor = (req, res) => {
  res.send('Code for: Add a new author')
}

const patchAuthor = (req, res) => {
  res.send('Code for: Update author details')
}

const deleteAuthor = (req, res) => {
  res.send('Code for: Delete a author')
}

module.exports = {
  getAuthors,
  getAuthorById,
  addAuthor,
  patchAuthor,
  deleteAuthor
}