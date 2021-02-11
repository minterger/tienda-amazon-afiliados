const { create } = require('express-handlebars')
const hbs = create({})

hbs.handlebars.registerHelper('Compare', (category, categoryName) => {
    if (category == categoryName) {
        return true
    }
    return false
})

hbs.handlebars.registerHelper('pagination', (totalPages) => {
    if (totalPages <= 1) {
        return false
    }
    return true
})


//sin terminar
hbs.handlebars.registerHelper('paginate', (totalPages, page, category) => {
    const li = []
    console.log(totalPages + " " + category)
    if (totalPages <=2) {
         for (let i = 1; i <= totalPages; i++) {
            if (i == page) {
                li.push('<li class="page-item disabled"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
            } else {
                li.push('<li class="page-item"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
            }
        }
        return li
    } /*else para mostrar paginas de a 3*/ else {
        for (let i ; i <= totalPages; i++) {
            if (i == page) {
                li.push('<li class="page-item disabled"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
            } else {
                li.push('<li class="page-item"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
            }
        }
        return li
    }
    
})

module.exports = hbs