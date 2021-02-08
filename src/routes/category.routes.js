const { Router } = require('express')

const {
    formCategory,
    addCategory,
    deleteCategory,
    formEditCategory,
    editCategory
} = require('../controllers/category.controller')

const router = Router()
const {isAuthenticated} = require('../helpers/auth')

//formulario añadir categoria
router.get('/add-category', isAuthenticated, formCategory)

//añadir categoria
router.post('/add-category', isAuthenticated, addCategory)

//eliminar categoria
router.delete('/deleteCategory/:id', isAuthenticated, deleteCategory)

//formulario editar categoria
router.get('/edit-category/:id', isAuthenticated, formEditCategory)

//editar categoria
router.put('/edit-category/:id', isAuthenticated, editCategory)

module.exports = router