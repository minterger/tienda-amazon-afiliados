const Category = require('../models/Category')

const indexCtrl = {}

indexCtrl.renderIndex = async (req, res) => {
    const category = await Category.find().lean()
    res.render('index', { category })
}

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
}

module.exports = indexCtrl