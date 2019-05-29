const Product = require('./product.model')
const Category = require('../category/category.model')
const User = require('../user/user.model')
const mongoose = require('mongoose')

const resolvers = {
    Query: {
        product: (root, {_id}) => {
            return Product.findById(_id)
        },
        products: async () => {
            return await Product.find()
        }
    },

    Product: {
        category: async (product) => {
            return await Category.findById(product.categoryId)
        },
        owner: async () => {
            return await User.findById(product.ownerId)
        }
    },

    Mutation: {
        createProduct: async (root, {title, price, categoryId, ownerId}) => {
            return await Product.create({
                _id: mongoose.Types.ObjectId(),
                title: title,
                price: price,
                categoryId: categoryId,
                ownerId: ownerId
            })
        },
        editProduct: (root, args) => {
            return Product.findOneAndUpdate({ $set: args });
        },
        deleteProduct: (root, {_id}) => {
            return Product.findOneAndRemove({_id})
        }
    }
}

module.exports = resolvers