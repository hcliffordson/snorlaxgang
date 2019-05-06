import { Context } from './types';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs as importedTypeDefs } from './schemas';
import { resolvers } from './resolvers';
import { prisma } from './utils';
import { parseToken, verifyToken } from './utils/auth';

const typeDefs = gql`
    ${importedTypeDefs}
`;

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async (expressContext): Promise<Context> => {
        const authHeader = expressContext.req.headers.authorization;
        const token = !authHeader ? '' : parseToken(authHeader);
        const user = await verifyToken(token);
        const db = prisma.getPrismaClient();
        return {
            ...expressContext,
            db,
            binding: prisma.getPrismaBinding(),
            user
        };
    }
});