import { pubsub } from '../../graphql-lib';

export const VOTE_ADDED__VOTE = 'VOTE_ADDED__VOTE';

export const publishVoteAdded = (voteAdded: any) => {
  pubsub.publish(VOTE_ADDED__VOTE, { voteAdded });
};

export const subscribeVoteAdded = {
  subscribe: () => pubsub.asyncIterator([VOTE_ADDED__VOTE]),
};
