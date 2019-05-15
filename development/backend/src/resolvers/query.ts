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

    getCategory: async (_parent, args, ctx, info) => {
        const ID = args.categoryId;
        return ctx.binding.query.category(
            {
                where: {
                    id: ID
                }
            }, info);
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
        const sql = `SELECT * FROM "default$default"."Listing" WHERE
        title ILIKE '%${query}%';`
            .replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/\s+/g, ' ');
        const response = await ctx.db.$graphql(`
            mutation {
                executeRaw(query: "${sql}")
            }
        `);
        return response.executeRaw;
    },

    getMyListings: async (_parent, _args, ctx, info) => {
        const userId = ctx.user.id;
        return ctx.binding.query.listings({
            where: {
                createdBy: {
                    id: userId
                }
            }
        }, info);
    },
    getUser: async (_parent, _args, ctx, info) => {
        const userid = ctx.user.id;
        return ctx.binding.query.user({
            where: {
                   id: userid
                }
        }, info);
    }
};