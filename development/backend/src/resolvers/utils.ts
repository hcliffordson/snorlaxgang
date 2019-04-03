import { GraphQLResolveInfo } from 'graphql';
import {
  Mutation as ApiMutation,
  Query as ApiQuery
} from '../../generated/server-local';
import { Context } from '../types';

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any
  ? U
  : any;
export type Remapped<T extends {[P in keyof T]: (...args: any[]) => any}> = {
  [P in keyof T]: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: Context,
    info?: GraphQLResolveInfo
  ) => ReturnType<T[P]>
};
export type Query = Partial<Remapped<ApiQuery>>;
export type Mutation = Partial<Remapped<ApiMutation>>;
export type Resolver<T> = {
  [index: string]: {
    [P in keyof Partial<T>]: (
      parent: T,
      args: any,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => any
  };
};
