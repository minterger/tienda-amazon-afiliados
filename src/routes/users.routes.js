const {Router} = require('express')
const {
    loginForm,
    login,
    registerForm,
    register,
    logout
} = require('../controllers/users.controller')
const router = Router()

router.get('/login', loginForm)

router.post('/login', login)

router.get('/register', registerForm)

router.post('/register', register)

router.get('/logout', logout)

module.exports = router