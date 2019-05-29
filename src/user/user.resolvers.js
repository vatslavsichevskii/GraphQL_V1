const User = require('./user.model')
const Cart = require('../cart/cart.model')
const Product = require('../product/product.model')
const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs');

const resolvers = {
    Query: {
        user: (root, { _id }) => {
            return User.findById(_id)
        },
        users: async () => {
            return await User.find()
        }
    },

    User: {
        cart: async (user) => {
            return await Cart.findOne({"userId": user.id})
        },
        products: async (user) => {
            return await Product.find({"ownerId": user.id})
        }
    },

    Mutation: {
        createUser: async (root, { name, email, password }) => {
            const user = await User.create({
                _id: mongoose.Types.ObjectId(),
                name: name,
                email: email,
                password: await bcryptjs.hash(password, 10)
            })
            await Cart.create({
                _id: mongoose.Types.ObjectId(),
                totalSum: 0,
                userId: user.id
            })
            return user
        },
        editUser: (root, args) => {
            return User.findOneAndUpdate({ $set: args });
        },
        deleteUser: (root, args) => {
            return User.findOneAndRemove(args)
        }
    }
}

module.exports = resolvers