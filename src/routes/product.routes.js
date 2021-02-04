const { Router } = require('express')
const {
    formProduct,
    createNewProduct,
    editProduct,
    endEditProduct,
    deleteProduct
} = require('../controllers/product.controller')
const router = Router()

router.get('/new-product', formProduct)

router.post('/new-product', createNewProduct)

router.get('/edit-product/:id', editProduct)

router.put('/edit-product/:id', endEditProduct)

router.delete('/delete-product/:id', deleteProduct)

module.exports = router