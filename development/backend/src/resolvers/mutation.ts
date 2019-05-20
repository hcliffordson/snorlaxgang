import { Mutation } from './utils';
import { IResolverObject } from 'graphql-tools';
import { argumentsObjectFromField } from 'apollo-utilities';
import { UserInputError } from 'apollo-server-core';

export const MutationMap: Mutation & IResolverObject = {
    createListing: async (_parent, args, ctx, info) => {
        const price = args.price;
        const title = args.title;
        const description = args.description;
        const imgURL = args.imgURL;
        const categoryId = args.categoryId;
        const userId = ctx.user.id;
        return ctx.binding.mutation.createListing({
            data: {
                price,
                description,
                title,
                imgURL,
                category: {
                    connect: {
                        id: categoryId
                    }
                },
                createdBy: {
                    connect: {
                        id: userId
                    }
                }
            }
        }, info);
    },

    updateListing: async (_parent, args, ctx, info) => {
        const { id, price, title, description, imgURL, categoryId } = args;
        const userId = ctx.user.id;
        const listingValid = await ctx.db.$exists.listing({
            id,
            createdBy: {
                id: userId
            }
        });

        if (!listingValid) {
            throw new UserInputError('No valid listing supplied');
        }
        const mutation = await ctx.binding.mutation.updateListing({
            where: {
                id
            },
            data: {
                price,
                description,
                title,
                imgURL,
                category: {
                    connect: {
                        id: categoryId
                    }
                }
            },
        }, info);
        if (!mutation) {
            throw new UserInputError('Could not be updated');
        }
        return mutation;
    }
};