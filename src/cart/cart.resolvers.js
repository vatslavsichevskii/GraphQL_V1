const Cart = require('./cart.model')
const User = require('../user/user.model')
const mongoose = require('mongoose')

const resolvers = {
    Query: {
        cart: (root, {_id}) => {
            return Cart.findById(_id)
        },
        carts: async () => {
            return await Cart.find()
        }
    },

    Cart: {
        user: async (cart) => {
            return await User.findById(cart.userId)
        }
    },

    Mutation: {
        createCart: async (root, {totalSum, userId}) => {
            return await Cart.create({
                _id: mongoose.Types.ObjectId(),
                totalSum: totalSum,
                userId: userId
            })
        },
        editCart: (root, args) => {
            return Cart.findOneAndUpdate({ $set: args});
        },
        deleteCart: (root, {_id}) => {
            return Cart.findOneAndRemove(_id)
        }
    }
}

module.exports = resolvers