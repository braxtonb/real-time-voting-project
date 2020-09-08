import { queryResolverVotes, queryResolverVotesFranchise, mutationResolverAddVote } from './Vote/vote.resolvers';
import { resolveDate } from './custom-scalars';
import { MutationResponse } from './custom-interfaces';
import { subscribeVoteAdded } from './Vote/vote.subscriptions';
import { queryResolverFranchises } from './Franchise/franchise.resolvers';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    franchises: queryResolverFranchises,
    votes: queryResolverVotes,
  },
  Mutation: {
    addVote: mutationResolverAddVote,
  },
  Subscription: {
    voteAdded: subscribeVoteAdded,
  },
  // https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-chains
  Vote: {
    franchise: queryResolverVotesFranchise,
  },
  Date: resolveDate,
  MutationResponse,
};

export default resolvers;
