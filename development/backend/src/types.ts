import { Prisma } from '../generated/prisma-client';
import { Prisma as PrismaBinding } from '../generated/prisma-binding';

export interface Context {
    db: Prisma;
    binding: PrismaBinding;
}