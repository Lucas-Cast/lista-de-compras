const Product = require('../models/Product')

const saveProductRepository = async (name, description, quantity) => {
    try {
        const product = new Product({name, description, quantity})
        await product.save()

    } catch (err) {
        throw err 
    }
}

const findProductsRepository = async () => {
    try {
        const products = await Product.find({})
        return products
    } catch (err) {
        throw err
    }
}

module.exports = {saveProductRepository,findProductsRepository}