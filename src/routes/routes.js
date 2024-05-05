const path = require('path')
const express = require('express')
const productController = require('../controllers/product.controllers')

const router = express.Router()
router.use(express.static(path.join(__dirname, '..', 'views')))

router.get('/', (req, res) => res.render(path.join(__dirname, '..', 'views')))
router.post('/saveProduct', productController.saveProductController)
router.get('/findProducts', productController.findProductsController)
router.delete('/deleteProduct', productController.deleteProductController)

module.exports = router