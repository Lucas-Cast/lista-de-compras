const express = require('express')
const productController = require('../controllers/product.controllers')

const router = express.Router()

router.post('/saveProduct', productController.saveProductController)
router.get('/findProducts', productController.findProductsController)

module.exports = router