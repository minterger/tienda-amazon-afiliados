const { Router } = require('express')
const {
    formProduct,
    createNewProduct,
    editProduct,
    endEditProduct,
    deleteProduct,
    renderProduct
} = require('../controllers/product.controller')
const router = Router()
const {isAuthenticated} = require('../helpers/auth')

//crear producto nuevo
router.get('/new-product', isAuthenticated, formProduct)

//recibir producto y guardar en la base de datos
router.post('/new-product', isAuthenticated, createNewProduct)

//editar producto
router.get('/edit-product/:id', isAuthenticated, editProduct)

//recibir producto editado
router.put('/edit-product/:id', isAuthenticated, endEditProduct)

//eliminar producto en la base de datos
router.delete('/delete-product/:id', isAuthenticated, deleteProduct)

//renderizar producto segun su categoria
router.get('/:category', renderProduct)

module.exports = router