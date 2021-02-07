const User = require('../models/User')

const userCtrl = {}

userCtrl.loginForm = (req, res) => {
    res.render('users/login')
}

userCtrl.login = (req, res) => {
    res.send('entrando')
}

userCtrl.registerForm = (req, res) => {
    res.render('users/register')
}

userCtrl.register = (req, res) => {
    const errors = []

    const { name, email, password, confirmPassword } = req.body
    
    if (password != confirmPassword) {
        errors.push({text: 'Passwords do not match'})
    }
    if (password.length < 5 ) {
        errors.push({text: 'Passwords must be at least 4 characters'})
    }
    if (errors.length > 0) {
        res.render('users/register', {errors, name, email})
    } else {
        res.send('register successfully')
    }
}

userCtrl.logout = (req, res) => {
    res.send('logout')
}

module.exports = userCtrl