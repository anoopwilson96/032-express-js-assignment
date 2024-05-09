const express = require('express')
const { getAuthors, getAuthorById, addAuthor, patchAuthor, deleteAuthor } = require('./controllers/authorControllers')
const router = express.Router()

// Get all authors.

router.get('/', getAuthors)

// Get author by Id.

router.get('/:authorId', getAuthorById)

// Add a new author.

router.post('/:authorId', addAuthor)


// Update author details.

router.patch('/:authorId', patchAuthor)

// Delete author.

router.delete('/:authorId', deleteAuthor)



module.exports = router