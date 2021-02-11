const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

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

productSchema.plugin(mongoosePaginate)

module.exports = model('Product', productSchema)
