const path = require('path')
const express = require('express')
const swaggerUI = require('swagger-ui-express')
const productController = require('../controllers/product.controllers')
const swaggerDocs = require('../../swagger.json')

const router = express.Router()
router.use(express.static(path.join(__dirname, '..', 'views')))
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
router.get('/', (req, res) => res.render(path.join(__dirname, '..', 'views')))
router.post('/saveProduct', productController.saveProductController)
router.get('/findProducts', productController.findProductsController)
router.delete('/deleteProduct', productController.deleteProductController)

module.exports = router