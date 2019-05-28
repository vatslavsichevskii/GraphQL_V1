const { gql } = require("apollo-server");

const typeDef = gql`
  type Category {
    _id: String
    name: String
    products:[Product]
  }

  extend type Query {
    categories: [Category]
    category(_id: ID!): Category
  }

  type Mutation {
    createCategory(name: String!): Category
    editCategory(_id: String! name: String): Category
    deleteCategory(_id: String!): Category
  }
`;

module.exports = typeDef;