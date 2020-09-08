import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Subscription {
    voteAdded: Vote
  }

  type Query {
    franchises: [Franchise]
    votes: [Vote]
  }

  type Franchise {
    id: Int!
    title: String!
  }

  type Vote {
    id: Int
    franchise: Franchise!
    username: String!
    created: Date!
  }

  type Mutation {
    addVote(vote: AddVoteInput): AddVoteMutationResponse
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  input AddVoteInput {
    franchiseId: Int!
    username: String!
  }

  type AddVoteMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    newVote: Vote
  }
`;

export default typeDefs;