const User = require('../models/User')

const userCtrl = {}

userCtrl.loginForm = async (req, res) => {
    const users = await User.find()
    if (users.length != 0) {
        res.render('users/login')
    } else {
        res.render('users/register')
    }
}

userCtrl.login = (req, res) => {
    res.send('entrando')
}

userCtrl.registerForm = (req, res) => {
    res.render('users/register')
}

userCtrl.register = async (req, res) => {
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
        const emailUser = await User.findOne({email})
        if (emailUser) {
            errors.push({text: 'The email is already exist'})
            res.render('users/register', {errors, name, email})
        } else {
            const newUser = new User({ name, email, password })
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save()
            req.flash('success_msg', 'User successfully registered')
            res.redirect('/')
        }
    }
}

userCtrl.logout = (req, res) => {
    res.send('logout')
}

module.exports = userCtrl