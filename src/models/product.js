const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    product: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
}, {
    timestamps: true
})

module.exports = model('Product', productSchema)
