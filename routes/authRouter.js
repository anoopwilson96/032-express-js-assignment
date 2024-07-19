const express = require('express')
const { login, verifyLogin, logout } = require('../controllers/authController')
const router = express.Router()

//this is route for login
router.post('/login',login )
//this is route for verify user is still logged in any request can be used post or get
router.get('/verify',verifyLogin)
// route for log out
router.get('/logout',logout)



module.exports = router

