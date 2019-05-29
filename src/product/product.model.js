const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    price: Number,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Product', productSchema);