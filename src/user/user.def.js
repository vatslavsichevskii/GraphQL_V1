const { gql } = require("apollo-server");

const typeDef = gql`
  type User {
    _id: String
    name: String
    email: String
    password: String
    cart: Cart
    products: Product
  }

  extend type Query {
    users: [User]
    user(_id: ID!): User
  }

  extend type Mutation {
    createUser(name: String email: String password: String): User
    editUser(_id: String! name: String email: String password: String): User
    deleteUser(_id: String!): User
  }
`;

module.exports = typeDef;