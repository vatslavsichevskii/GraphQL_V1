const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    totalSum: Number,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Cart', cartSchema);