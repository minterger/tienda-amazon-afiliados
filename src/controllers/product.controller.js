const product = require("../models/Product");

const productCtrl = {}

productCtrl.newProduct = (req, res) => {
    res.render('products/new-product')
}

productCtrl.createNewProduct = (req, res) => {
    res.send('creando nuevo producto')
}

productCtrl.editProduct = (req, res) => {
    res.render('products/edit-product')
}

productCtrl.endEditProduct = (req, res) => {
    res.send('producto editado')
}

module.exports = productCtrl