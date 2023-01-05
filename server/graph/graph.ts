import { ApolloServer } from 'apollo-server-koa';
import { typeDefs } from './schema/reservation';
import { reservationCtrl } from '../controllers/reservation-ctrl';

export default async (app) => {
    const server = new ApolloServer({ typeDefs, resolvers: reservationCtrl });
    server.applyMiddleware({ app });
}
