const Product = require('../models/Product')

const saveProduct = async (name, description, quantity) => {
    try {
        const product = new Product({name, description, quantity})
        await product.save()

    } catch (err) {
        throw err 
    }
}

module.exports = {saveProduct}