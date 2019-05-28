const category = require('./category/index')
const product = require('./product/index')

module.exports = {
    typeDefs: [
        category.typeDef,
        product.typeDef
    ],
    resolvers: [
        category.resolvers,
        product.resolvers
    ] 
}