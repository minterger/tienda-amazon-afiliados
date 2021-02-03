const Product = require("../models/Product");

const productCtrl = {}

productCtrl.formProduct = (req, res) => {
    res.render('products/new-product')
}

productCtrl.createNewProduct = async (req, res) => {
    const { product_name, img_link, description, price } = req.body
    const newProduct = new Product({ product_name, img_link, description, price})
    await newProduct.save()
    //req.flash('success_msg', 'Note Added Successfully')
    res.redirect('/')
}

productCtrl.editProduct = (req, res) => {
    res.render('products/edit-product')
}

productCtrl.endEditProduct = (req, res) => {
    res.send('producto editado')
}

module.exports = productCtrl