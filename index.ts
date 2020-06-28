import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';

import typeDefs from './lib/type-definitions';
import resolvers from './lib/resolvers';

dotenv.config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: !!process.env.DEBUG,
    context: ({ req }) => ({
        identityToken: req.headers['x-identity'],
        serviceUri: process.env.INGRESS_SERVICE_URI,
    })
});

server.listen({ port: 4200 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});