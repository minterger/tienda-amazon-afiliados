const product = require("../models/Product");

const productCtrl = {}

productCtrl.newProduct = (req, res) => {
    res.render('products/new-product')
}

module.exports = productCtrl