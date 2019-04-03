import { Query } from './utils';
import { IResolverObject } from 'graphql-tools';

export const QueryMap: Query & IResolverObject = {
    test: async (_parent, args, ctx, info) => {
        return 'Hello world!';
    }
};