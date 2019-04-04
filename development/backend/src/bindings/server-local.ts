import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from '../schemas';

export default makeExecutableSchema({
    typeDefs
});

