const { gql } = require("apollo-server");

const typeDef = gql`
  type CartItem {
    _id: String
    totalSum: Int
    quantity: Int
    productId(id: ID!): Product
    cartId(id: ID!): Cart
    product: Product
    cart: Cart
  }

  extend type Query {
    cartItems: [CartItem]
    cartItem(_id: ID!): CartItem
  }

  extend type Mutation {
    createCartItem(totalSum: Int quantity: Int! productId: ID! cartId: ID!): CartItem
    editCartItem(_id: String! totalSum: Int quantity: Int!): CartItem
    deleteCartItem(_id: String!): CartItem
  }
`;

module.exports = typeDef;