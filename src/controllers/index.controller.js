const Product = require('../models/Product')

const indexCtrl = {}

indexCtrl.renderIndex = async (req, res) => {
    const products = await Product.find().lean()
    res.render('index', { products })
}

module.exports = indexCtrl