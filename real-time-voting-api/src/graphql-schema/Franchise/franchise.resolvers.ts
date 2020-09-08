import { Context } from '../../graphql-lib/context';

export const queryResolverFranchises = async (source: any, args: any, context: Context) => {
  try {
    const franchises = await context.db.franchise.findMany();

    return franchises;
  } catch (error) {
    console.error('Error in resolver querying franchises', error);

    return [];
  }
};