const Product = require("../models/Product");
const Category = require('../models/Category')

const productCtrl = {}

productCtrl.formProduct = async (req, res) => {
    const category = await Category.find().lean()
    res.render('products/new-product', { category })
}

productCtrl.createNewProduct = async (req, res) => {
    const { product_name, product_link, img_link, description, category, price } = req.body
    const newProduct = new Product({ product_name, product_link, img_link, description, category, price})
    await newProduct.save()
    req.flash('success_msg', 'Note Added Successfully')
    res.redirect('/')
}

productCtrl.editProduct = async (req, res) => {
    const category = await Category.find().lean()
    const product = await Product.findById(req.params.id).lean()
    res.render('products/edit-product', { product, category })
}

productCtrl.endEditProduct = async (req, res) => {
    const { product_name, product_link, img_link, description, category, price } = req.body
    await Product.findByIdAndUpdate(req.params.id, { product_name, product_link, img_link, description, category, price })
    req.flash('success_msg', 'Product edited successfully')
    res.redirect('/')
}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id)
    req.flash('success_msg', 'Product Deleted Successfully')
    res.redirect('/')
}

productCtrl.renderProduct = async (req, res) => {
    const { category } = await Category.findOne({'category': req.params.category}).lean() || "null"
    if ( category == req.params.category) {
        const products = await Product.find({'category': req.params.category}).lean()
        res.render('products/get-products', { products })
    } else {
        res.redirect('/')
    }
    
}

module.exports = productCtrl