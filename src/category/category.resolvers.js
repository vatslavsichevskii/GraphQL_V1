const Category = require('./category.model')
const Product = require('../product/product.model')
const mongoose = require('mongoose')

const resolvers = {
    Query: {
        category: (root, {_id}) => {
            return Category.findById(_id)
        },
        categories: async () => {
            return await Category.find()
        }
    },

    Category: {
        products: async (category) => {
            return await Product.find({categoryId: category.id})
        }
    },

    Mutation: {
        createCategory: async (root, {name}) => {
            return await Category.create({
                _id: mongoose.Types.ObjectId(),
                name: name
            })
        },
        editCategory: (root, args) => {
            return Category.findOneAndUpdate({ $set: args});
        },
        deleteCategory: (root, args) => {
            return Category.findOneAndRemove(args)
        }
    }
}

module.exports = resolvers