const productServices = require('../services/product.services')

const saveProductController = async (req, res) => {
    try{
        const {body} =  await req
        productServices.saveProductService(body)
            .then(() => res.status(200).send('Product successfully saved'))
            .catch((err) => res.status(400).send(err))

    } catch (err) {
        res.status(400).send(err)
    }
}    

const findProductsController = (req, res) => {
    try {
        productServices.findProductsService()
            .then((products) => res.status(200).send(products))
            .catch(err => res.status(400).send(err))
        
    } catch (err) {

    }
}

module.exports = {saveProductController,findProductsController}