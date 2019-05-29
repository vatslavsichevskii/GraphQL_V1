const CartItem = require('./cartItem.model')
const Cart = require('../cart/cart.model')
const Product = require('../product/product.model')
const mongoose = require('mongoose')

const resolvers = {
    Query: {
        cartItem: (root, { _id }) => {
            return CartItem.findById(_id)
        },
        cartItems: async () => {
            return await CartItem.find()
        }
    },

    CartItem: {
        product: async (cartItem) => {
            return await Product.findById(cartItem.productId)
        },
        cart: async (cartItem) => {
            return await Cart.findById(cartItem.cartId)
        }
    },

    Mutation: {
        createCartItem: async (root, { totalSum, quantity, productId, cartId }) => {
            return await CartItem.create({
                _id: mongoose.Types.ObjectId(),
                totalSum: totalSum,
                quantity: quantity,
                productId: productId,
                cartId: cartId
            })
        },
        editCartItem: (root, args) => {
            return CartItem.findOneAndUpdate({ $set: args });
        },
        deleteCartItem: (root, args) => {
            return CartItem.findOneAndRemove(args)
        }
    }
}

module.exports = resolvers