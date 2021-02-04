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

productCtrl.editProduct = async (req, res) => {
    const product = await Product.findById(req.params.id).lean()
    res.render('products/edit-product', { product })
}

productCtrl.endEditProduct = async (req, res) => {
    const { product_name, img_link, description, price } = req.body
    await Product.findByIdAndUpdate(req.params.id, { product_name, img_link, description, price })
    res.redirect('/')
}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id)
    res.redirect('/')
}

module.exports = productCtrl