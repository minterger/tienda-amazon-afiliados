const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')


//inititializations
const app = express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//middlewars

//gloval variables

//routes
app.get('/', (req , res) => {
    res.send('hola mundo')
})

//static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app