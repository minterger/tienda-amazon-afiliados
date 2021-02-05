const { Router } = require('express')

const {
    addCategory,
    deleteCategory
} = require('../controllers/category.controller')

const router = Router()

//añadir categoria
router.post('/add-category', addCategory)

//eliminar categoria
router.delete('/deleteCategory/:id', deleteCategory)

module.exports = router