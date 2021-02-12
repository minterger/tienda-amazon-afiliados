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

hbs.handlebars.registerHelper('categories', (category) => {
    if (category[0]) {
        category = category[0].category
    }
    return category
})


//sin terminar
hbs.handlebars.registerHelper('paginate', (totalPages, page, category) => {
    const li = []
    var i = page > 4 ? page - 3 : 1;
    if (category[0]) {
        var category = category[0].category || '/'
    }

    if (i != 1) {
        li.push('<li class="page-item"><a class="page-link" href="#">...</a></li>')
    }
    for (; i <= (page + 3); i++) {
        if (i == page && i !== totalPages) {
            li.push('<li class="page-item disabled"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
        } else if (i !== totalPages) {
            li.push('<li class="page-item"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
        } else {
            if (i == page) {
                li.push('<li class="page-item disabled"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
                break
            }
            li.push('<li class="page-item"><a class="page-link" href="/' + category + '?page=' + i + '">' + i + '</a></li>')
            break
        }
    }
    if (page < totalPages -3) {
        li.push('<li class="page-item"><a class="page-link" href="#">...</a></li>')
    }
    return li
})

module.exports = hbs