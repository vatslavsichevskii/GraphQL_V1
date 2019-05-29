const category = require('./category/index')
const product = require('./product/index')
const cart = require('./cart/index')
const cartItem = require('./cartItem/index')
const user = require('./user/index')

module.exports = {
    typeDefs: [
        category.typeDef,
        product.typeDef,
        cart.typeDef,
        cartItem.typeDef,
        user.typeDef
    ],
    resolvers: [
        category.resolvers,
        product.resolvers,
        cart.resolvers,
        cartItem.resolvers,
        user.resolvers
    ] 
}