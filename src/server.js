const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')


// inititializations
const hbs = exphbs.create({})
const app = express()

// settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// middlewars
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(methodOverride('_method'))
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }))
// app.use(passport.initialize())
// app.use(passport.session())
app.use(flash())

//gloval variables
app.use((req, res, next) => {
    //ejemplo
    //res.locals.success_msg = req.flash('seccess_msg')
    next()
})

//helpers
hbs.handlebars.registerHelper('Compare', function(category, categoryName) {
    if (category == categoryName) {
        return true
    } else {
        return false
    }
})

//routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/category.routes'))
app.use(require('./routes/product.routes'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app