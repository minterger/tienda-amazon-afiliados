const Category = require('../models/Category')
const Product = require('../models/Product')

const categoryCtrl = {}

//añadir categoria
categoryCtrl.addCategory = async (req, res) => {
    const { categoryName, img_category} = req.body
    const newCategory = new Category({categoryName, img_category})
    newCategory.category = newCategory.categoryToLowerCase(categoryName)
    await newCategory.save()
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
    res.redirect('/')
}

module.exports = categoryCtrl