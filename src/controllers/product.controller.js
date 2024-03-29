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
    req.flash('success_msg', 'Product added successfully')
    res.redirect('/')
}

productCtrl.editProduct = async (req, res) => {
    const category = await Category.find().lean()
    const product = await Product.findById(req.params.id).lean()
    res.render('products/edit-product', { product, category })
}

productCtrl.endEditProduct = async (req, res) => {
    const { product_name, product_link, img_link, description, category, price } = req.body;
    try {
        await Product.findByIdAndUpdate(req.params.id, { product_name, product_link, img_link, description, category, price })
        req.flash('success_msg', 'Product edited successfully')
        res.redirect('/')
    } catch (error) {
        req.flash('error_msg', 'Error');
        res.redirect('/');
    }
}

productCtrl.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id)
        req.flash('success_msg', 'Product Deleted Successfully')
        res.redirect('/')
    } catch (error) {
        req.flash('error_msg', 'Error');
        res.redirect('/');
    }
}

productCtrl.renderProduct = async (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 8
    const { category } = await Category.findOne({'category': req.params.category}).lean() || "null"
    if ( category == req.params.category) {
        const products = await Product.paginate({'category': req.params.category}, {
            lean: true,
            page,
            limit,
            sort: {updatedAt: -1}
        })
        if (products.page > products.totalPages) {
            res.redirect('/' + category)
        }
        res.render('products/get-products', { products })
    } else {
        res.redirect('/')
    }
    
}

module.exports = productCtrl