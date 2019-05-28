const { gql } = require("apollo-server");

const typeDef = gql`
  type Cart {
    _id: String
    totalSum: Int
    userId(id: ID!): User
    user: User
  }

  extend type Query {
    carts: [Cart]
    cart(_id: ID!): Cart
  }

  extend type Mutation {
    createCart(totalSum: Int! userId: ID!): Cart
    editCart(_id: String! totalSum: Int): Cart
    deleteCart(_id: String!): Cart
  }
`;

module.exports = typeDef;