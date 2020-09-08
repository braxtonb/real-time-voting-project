import { publishVoteAdded } from './vote.subscriptions';
import { Context } from '../../graphql-lib/context';
import { Vote } from '@prisma/client';

export const queryResolverVotes = async (source: any, args: any, context: Context) => {
  try {
    const votes = await context.db.vote.findMany();

    return votes;
  } catch (error) {
    console.error('Error in resolver querying votes', error);

    return [];
  }
};

// https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-chains
export const queryResolverVotesFranchise = async (source: Vote, args: any, context: Context) => {
  try {
    const franchise = await context.db.franchise.findOne({
      where: {
        id: source.franchiseId,
      },
    });

    return franchise;
  } catch (error) {
    console.error('Error in resolver querying vote\'s franchise', error);

    return [];
  }
};

interface MutationResolverAddVoteArgs {
  vote: Vote;
}

export const mutationResolverAddVote = async (source: any, { vote }: MutationResolverAddVoteArgs, context: Context) => {
  try {
    const newVote = await context.db.vote.create({
      data: {
        Franchise: {
          connect: {
            id: vote.franchiseId,
          },
        },
        username: vote.username,
        created: new Date(),
      },
    });
    publishVoteAdded(newVote);

    return {
      code: '200',
      success: true,
      message: 'Vote successfully added',
      newVote,
    };
  } catch (error) {
    console.error('Error adding vote', error);
  }
};