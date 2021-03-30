const Category = require('../models/Category')
const Product = require('../models/Product')

const categoryCtrl = {}

//formulario para añadir categoria
categoryCtrl.formCategory = (req, res) => {
    res.render('category/add-category')
}

//añadir categoria
categoryCtrl.addCategory = async (req, res) => {
    const errors = []
    const { categoryName, img_category } = req.body
    const category = categoryName.toLowerCase()
    try {
        const newCategory = new Category({categoryName, category, img_category})
        await newCategory.save()
        req.flash('success_msg', 'Category Added Successfully')
        res.redirect('/new-product')
    } catch (error) {
        errors.push({text: 'This category is already exist'})
        res.render('category/add-category', {errors ,categoryName, img_category})
    }
}

//eliminar categoria y todos los productos que contiene esa categoria
categoryCtrl.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndRemove(req.params.id);
        const response = await Product.deleteMany({category: category.category});
        console.log(response);
        req.flash('success_msg', 'Category Deleted Successfully')
        res.redirect('/')
    } catch (error) {
        req.flash('error_msg', 'Error')
        res.redirect('/')
    }
}

//editar categoria
categoryCtrl.formEditCategory = async (req, res) => {
    const { _id, categoryName, img_category} = await Category.findById(req.params.id).lean()
    res.render('category/edit-category', { _id, categoryName, img_category})
}

//guardar lo editado
categoryCtrl.editCategory = async (req, res) => {
    const errors = [];
    const { categoryName, img_category} = req.body;
    const category = categoryName.toLowerCase();
    try {
        const oldCategory = await Category.findByIdAndUpdate(req.params.id, {categoryName, img_category, category });
        const response = await Product.updateMany({category: oldCategory.category}, {category: category});
        console.log(response);
        req.flash('success_msg', 'Category Edited Successfully');
        res.redirect('/');
    } catch (error) {
        errors.push({text: 'This category is already exist'});
        res.render('category/edit-category', { errors, _id: req.params.id, categoryName, img_category});
    }
}

module.exports = categoryCtrl