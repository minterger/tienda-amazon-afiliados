const { Router } = require('express')
const {newProduct} = require('../controllers/product.controller')
const router = Router()

router.get('/new-product', newProduct)

module.exports = router