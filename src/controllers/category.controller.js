const Category = require('../models/Category')
const Product = require('../models/Product')

const categoryCtrl = {}

//formulario para añadir categoria
categoryCtrl.formCategory = (req, res) => {
    res.render('category/add-category')
}

//añadir categoria
categoryCtrl.addCategory = async (req, res) => {
    const { categoryName, img_category} = req.body
    const newCategory = new Category({categoryName, img_category})
    newCategory.category = categoryName.toLowerCase()
    await newCategory.save()
    req.flash('success_msg', 'Category Added Successfully')
    res.redirect('/new-product')
}

//eliminar categoria y todos los productos que contiene esa categoria
categoryCtrl.deleteCategory = async (req, res) => {
    const category = await Category.findById(req.params.id)
    const product = await Product.find({'category': category.category})
    for (i = 0; i < product.length; i++) {
        await Product.findByIdAndRemove(product[i]._id)
    }
    await Category.findByIdAndRemove(req.params.id)
    req.flash('success_msg', 'Category Deleted Successfully')
    res.redirect('/')
}

//editar categoria
categoryCtrl.formEditCategory = async (req, res) => {
    const category = await Category.findById(req.params.id).lean()
    res.render('category/edit-category', {category})
}

//guardar lo editado
categoryCtrl.editCategory = async (req, res) => {
    const oldCategory = await Category.findById(req.params.id)
    const { categoryName, img_category} = req.body
    const category = categoryName.toLowerCase()
    const product = await Product.find({'category': oldCategory.category})
    for (i = 0; i < product.length; i++) {
        await Product.findByIdAndUpdate(product[i]._id, { category })
    }
    await Category.findByIdAndUpdate(req.params.id, {categoryName, img_category, category })
    req.flash('success_msg', 'Category Edited Successfully')
    res.redirect('/')
}

module.exports = categoryCtrl