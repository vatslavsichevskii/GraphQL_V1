const { gql } = require("apollo-server");

const typeDef = gql`
  type Product {
    _id: String
    title: String
    price: Int
    categoryId(id: ID!): Category
    ownerId(id: ID!): User
    category: Category
    owner: User
  }

  extend type Query {
    products: [Product]
    product(_id: ID!): Product
  }

  extend type Mutation {
    createProduct(title: String! price: Int! categoryId: ID! ownerId: ID!): Product
    editProduct(_id: String! title: String price: Int): Product
    deleteProduct(_id: String!): Product
  }
`;

module.exports = typeDef;