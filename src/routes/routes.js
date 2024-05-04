const express = require('express')
const productController = require('../controllers/product.controllers')

const router = express.Router()

router.post('/saveProduct', productController.saveProductController)

module.exports = router