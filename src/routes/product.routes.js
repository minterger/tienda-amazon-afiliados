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

//crear producto nuevo
router.get('/new-product', formProduct)

//recibir producto y guardar en la base de datos
router.post('/new-product', createNewProduct)

//editar producto
router.get('/edit-product/:id', editProduct)

//recibir producto editado
router.put('/edit-product/:id', endEditProduct)

//eliminar producto en la base de datos
router.delete('/delete-product/:id', deleteProduct)

//renderizar producto segun su categoria
router.get('/:category', renderProduct)

module.exports = router