import { resolvers } from '../resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '../schemas';

export default makeExecutableSchema({
    typeDefs,
    resolvers
});

