const { gql } = require("apollo-server");

const typeDef = gql`
  type CartItem {
    _id: String
    title: String
    price: Int
    categoryId(id: ID!): Category
    category: Category
  }

  extend type Query {
    products: [CartItem]
    product(_id: ID!): CartItem
  }

  extend type Mutation {
    createCartItem(title: String! price: Int! categoryId: ID!): CartItem
    editCartItem(_id: String! title: String price: Int): CartItem
    deleteCartItem(_id: String!): CartItem
  }
`;

module.exports = typeDef;