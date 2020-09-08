import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import CONFIG from '../constants/config';

// https://www.apollographql.com/docs/react/data/subscriptions/#setting-up-the-transport
const httpLink = new HttpLink({
  uri: CONFIG.API_GRAPHQL,
});

// only use websockets on client side
// https://github.com/apollographql/subscriptions-transport-ws/issues/333#issuecomment-359261024
const wsLink = process.browser
  ? new WebSocketLink({
      uri: CONFIG.API_GRAPHQL_WS,
      options: {
        reconnect: true,
      },
    })
  : null;

const shouldUseWsLink = ({ query }) => {
  const definition = getMainDefinition(query);

  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
};

const splitLink = process.browser
  ? split(shouldUseWsLink, wsLink, httpLink)
  : httpLink;

export const apolloClient = new ApolloClient({
  // uri: API_GRAPHQL_DEV,
  link: splitLink,
  cache: new InMemoryCache(),
});
