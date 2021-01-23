const { Router } = require('express')
const router = Router()

const indexCtrl = require('../controllers/index.controller')

router.get('/', indexCtrl.renderIndex)

module.exports = router