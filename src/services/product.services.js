const productRepository = require('../repositories/product.repositories')

const saveProductService = async (body) => {
    try {
        const {name, description = "", quantity = 1} = body
        if (!name) throw "You must set a name"
        if (typeof(quantity) != typeof(1)) throw "Quantity must be a number"

        await productRepository.saveProduct(name, description, quantity)

    } catch (err) {
        throw `Error : ${err}`
    }
}

const findProductsService = async () => {
    try {
        const products = await productRepository.findProductsRepository()
        if (products.length == 0) throw 'No producst have been registered'
        return products
    } catch (err) {
        throw err
    }
}

const deleteProductService = async (query) => {
    try {
        const id = query.id
        if (!id) throw 'The id is empty'

        const product = await productRepository.findProductById(id)
        if (!product) throw 'No products found'

        await productRepository.deleteProductRepository(id)
    
    } catch (err) {
        throw err
    }
}

module.exports = {saveProductService, findProductsService, deleteProductService}