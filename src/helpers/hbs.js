const { create } = require('express-handlebars')
const hbs = create({})

hbs.handlebars.registerHelper('Compare', function(category, categoryName) {
    if (category == categoryName) {
        return true
    } else {
        return false
    }
})

module.exports = hbs