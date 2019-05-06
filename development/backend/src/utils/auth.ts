import jwt from 'jsonwebtoken';
import config from '../config';
import { prisma } from '.';
import { User } from '../../generated/prisma-client';

const db = prisma.getPrismaClient();
const { JWT_SECRET } = config;

export const parseToken = (headerValue: string): string => {
    const splitted = headerValue.split(/Bearer\:?\s?/i);
    return splitted[splitted.length > 1 ? 1 : 0].trim();
};

const defaultUser = {
    email: 'default@example.org',
    password: 'defaultpass',
    firstName: 'Default',
    surname: 'Smith'
};

const createDefaultUser = (): Promise<User> => db.createUser(defaultUser);

const getDefaultUser = async (): Promise<User> => {
    const exists = await db.$exists.user(defaultUser);
    if (!exists) return createDefaultUser();
    const users = await db.users({
        where: defaultUser
    });
    return users[0];
};

export const verifyToken = async (token: string): Promise<User> => {
    let userId;
    try {
        userId = jwt.verify(token, JWT_SECRET) as string;
    } catch (ex) {
        console.warn(ex);
    }
    if (!userId) {
        return getDefaultUser();
    }
    return db.user({id: userId});
};