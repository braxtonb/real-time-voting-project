import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import '../styles/globals.css'
import { apolloClient } from '../src/client/apollo-client';

const ThriveVotingApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default ThriveVotingApp
