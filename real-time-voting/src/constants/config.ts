const API_GRAPHQL_DEV = 'http://localhost:4000/';
// websockets use /graphql endpoint
// https://github.com/apollographql/apollo-client/issues/4778
const API_GRAPHQL_WS_DEV = 'ws://localhost:4000/graphql';

let API_GRAPHQL;
let API_GRAPHQL_WS;

switch (process.env.NODE_ENV) {
  case 'development':
    API_GRAPHQL = API_GRAPHQL_DEV;
    API_GRAPHQL_WS = API_GRAPHQL_WS_DEV;
    break;
  case 'production':
    API_GRAPHQL = process.env.NEXT_PUBLIC_API_GRAPHQL_PROD;
    API_GRAPHQL_WS = process.env.NEXT_PUBLIC_API_GRAPHQL_WS_PROD;
    break;
  default:
    API_GRAPHQL = API_GRAPHQL_DEV;
    API_GRAPHQL_WS = API_GRAPHQL_WS_DEV;
}

export default {
  API_GRAPHQL,
  API_GRAPHQL_WS,
};