import koa from 'koa';
import { ApolloServer, mergeSchemas } from 'apollo-server-koa';
import { typeDefs } from './schema/reservation';
import { GraphQLSchema } from 'graphql';
import { reservationCtrl } from '../controllers/reservation-ctrl';

const app = new koa();
const server = new ApolloServer({ typeDefs, resolvers: reservationCtrl });
server.applyMiddleware({ app });
const PORT = 3002;

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`),);