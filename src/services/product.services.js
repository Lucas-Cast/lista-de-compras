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

module.exports = {saveProductService}