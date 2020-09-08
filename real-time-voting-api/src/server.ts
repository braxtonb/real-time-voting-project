import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql-schema';
import { createContext } from './graphql-lib/context';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
  cors: true,
  introspection: true,
});

export default server;
