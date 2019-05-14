import { Query } from './utils';
import { IResolverObject } from 'graphql-tools';

export const QueryMap: Query & IResolverObject = {
    getAllListings: async (_parent, _args, ctx, info) => {
        return ctx.binding.query.listings({}, info);
    },

    getListing: async (_parent, args, ctx, info) => {
        const ID = args.id;
        return ctx.binding.query.listing(
            {
                where: {
                    id: ID
                }
            }, info);
    },

    getAllCategories: async (_parent, _args, ctx, info) => {
        return ctx.binding.query.categories({}, info);
    },

    getListingsInCategory: async (_parent, args, ctx, info) => {
        const ID = args.categoryId;
        return ctx.binding.query.listings({
            where: {
                category: {
                    id: ID
                }
            }
        }, info);
    },

    searchListings: async (_parent, args, ctx, info) => {
        const { query } = args;
        return ctx.binding.query.listings({
            where: {
                title_contains: query
            }
        }, info);
    }
};