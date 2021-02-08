const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    product_name: {type: String, required: true},
    product_link: {type: String, required: true},
    img_link: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true}
}, {
    timestamps: true
})

module.exports = model('Product', productSchema)
