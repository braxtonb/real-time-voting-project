import { gql } from '@apollo/client';

export const FETCH_ALL_VOTES_AND_FRANCHISES__QUERY = gql`
  query FetchAllVotesAndFranchisesQuery {
    votes {
      id
      franchise {
        id
        title
      }
      username
      created
    }

    franchises {
      id
      title
    }
  }
`;

export const ON_VOTE_ADDED__SUBSCRIPTION = gql`
  subscription OnVoteAdded {
    voteAdded {
      id
      franchise {
        id
        title
      }
      username
      created
    }
  }
`;