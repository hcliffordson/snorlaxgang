import { Context } from './types';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs as importedTypeDefs } from './schemas';
import { resolvers } from './resolvers';
import { prisma } from './utils';

const typeDefs = gql`
    ${importedTypeDefs}
`;

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async (expressContext): Promise<Context> => ({
        ...expressContext,
        db: prisma.getPrismaClient(),
        binding: prisma.getPrismaBinding()
    })
});