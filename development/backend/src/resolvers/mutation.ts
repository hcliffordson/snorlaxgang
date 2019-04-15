import { Mutation } from './utils';
import { IResolverObject } from 'graphql-tools';

export const MutationMap: Mutation & IResolverObject = {
    createListing: async (_parent, args, ctx, info) => {
        const price = args.price;
        const title = args.title;
        const description = args.description;
        return ctx.binding.mutation.createListing({
            data: {
                price,
                description,
                title

            }
        }, info);
    }
};