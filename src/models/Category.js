const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    categoryName: {type: String, required: true},
    category: {type: String, required: true},
    img_category: {type: String, required: true}
}, {
    timestamps: true
});

categorySchema.methods.categoryToLowerCase = (category) => {
    return category.toLowerCase()
}

module.exports = model('Category', categorySchema)