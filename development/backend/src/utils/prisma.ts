import { Prisma as PrismaClient } from '../../generated/prisma-client';
import config from '../config';
import { Prisma as PrismaBinding } from '../../generated/prisma-binding';

let _prismaClient: PrismaClient;
let _prismaBinding: PrismaBinding;
const options = {
    endpoint: config.PRISMA_ENDPOINT,
    secret: config.PRISMA_SECRET
};

console.log('Prisma options are: ', options);

export const getPrismaClient = (): PrismaClient => {
    if (!_prismaClient)
        _prismaClient = new PrismaClient(options);
    return _prismaClient;
};

export const getPrismaBinding = (): PrismaBinding => {
    if (!_prismaBinding)
        _prismaBinding = new PrismaBinding(options);
    return _prismaBinding;
};
