const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: String,
    description: String,
    quantity: Number
})

module.exports = Product