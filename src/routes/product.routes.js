const { Router } = require('express')
const {
    formProduct,
    createNewProduct,
    editProduct,
    endEditProduct
} = require('../controllers/product.controller')
const router = Router()

router.get('/new-product', formProduct)

router.post('/new-product', createNewProduct)

router.get('/edit-product', editProduct)

router.post('/edit-product', endEditProduct)

module.exports = router