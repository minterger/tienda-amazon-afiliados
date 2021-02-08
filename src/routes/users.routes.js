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

router.get('/new-user', registerForm)

router.post('/new-user', register)

router.get('/logout', logout)

module.exports = router