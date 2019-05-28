require('./datasource')
const { ApolloServer, gql } = require("apollo-server");
const resolversAndDefs = require('./src/index')

const typeDef = gql`
  type Query 
`;

const server = new ApolloServer({
  typeDefs: [typeDef, ...resolversAndDefs.typeDefs],
  resolvers: resolversAndDefs.resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});