const Product = require("../models/Product");
const Category = require('../models/Category')

const productCtrl = {}

productCtrl.addCategory = async (req, res) => {
    const { categoryName, img_category} = req.body
    const newCategory = new Category({categoryName, img_category})
    newCategory.category = newCategory.categoryToLowerCase(categoryName)
    await newCategory.save()
    res.redirect('/new-product')
}

productCtrl.formProduct = async (req, res) => {
    const category = await Category.find().lean()
    res.render('products/new-product', { category })
}

productCtrl.createNewProduct = async (req, res) => {
    const { product_name, img_link, description, category, price } = req.body
    const newProduct = new Product({ product_name, img_link, description, category, price})
    await newProduct.save()
    //req.flash('success_msg', 'Note Added Successfully')
    res.redirect('/')
}

productCtrl.editProduct = async (req, res) => {
    const category = await Category.find().lean()
    const product = await Product.findById(req.params.id).lean()
    res.render('products/edit-product', { product, category })
}

productCtrl.endEditProduct = async (req, res) => {
    const { product_name, img_link, description, category, price } = req.body
    await Product.findByIdAndUpdate(req.params.id, { product_name, img_link, description, category, price })
    res.redirect('/')
}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndRemove(req.params.id)
    res.redirect('/')
}

productCtrl.renderProduct = async (req, res) => {
    const category = await Category.findOne({'category': req.params.category})
    if (category.category == req.params.category) {
        const products = await Product.find({'category': req.params.category}).lean()
        res.render('products/get-products', { products })
    }else {
        res.send('esta pagina no existe')
    }
    
}

module.exports = productCtrl