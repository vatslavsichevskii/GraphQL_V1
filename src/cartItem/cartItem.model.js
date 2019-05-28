const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    totalSum: Number,
    quantity: Number,
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
    }
});

module.exports = mongoose.model('CartItem', cartItemSchema);