import dotenv from 'dotenv';

dotenv.config();

export default {
    SERVER_PORT: 4000,
    GRAPHQL_PATH: '/graphql',
    PRISMA_SECRET: process.env.PRISMA_SECRET || undefined,
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT || 'http://localhost:4466'
};
