const express = require('express')
const { getUsers, getUserById, addUser, patchUser, deleteUser } = require('../controllers/userControllers')
const router = express.Router()


// Get all users.

router.get('/', getUsers)

// Get user by Id.

router.get('/:userId', getUserById)

// Add a new user.

router.post('/', addUser)

// Update user details.

router.patch('/:userId', patchUser)

// Delete a user.

router.delete('/:userId', deleteUser)



module.exports = router