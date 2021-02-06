const { Router } = require('express')

const {
    formCategory,
    addCategory,
    deleteCategory,
    formEditCategory,
    editCategory
} = require('../controllers/category.controller')

const router = Router()

//formulario añadir categoria
router.get('/add-category', formCategory)

//añadir categoria
router.post('/add-category', addCategory)

//eliminar categoria
router.delete('/deleteCategory/:id', deleteCategory)

//formulario editar categoria
router.get('/edit-category/:id', formEditCategory)

//editar categoria
router.put('/edit-category/:id', editCategory)

module.exports = router