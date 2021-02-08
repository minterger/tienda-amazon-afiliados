const {Router} = require('express')
const {
    loginForm,
    login,
    registerForm,
    register,
    logout
} = require('../controllers/users.controller')
const router = Router()
const {isAuthenticated} = require('../helpers/auth')

router.get('/login', loginForm)

router.post('/login', login)

router.get('/new-user', isAuthenticated, registerForm)

router.post('/new-user', register)

router.get('/logout', isAuthenticated, logout)

module.exports = router