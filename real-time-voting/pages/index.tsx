import { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { useEffect } from 'react';
import PageLayout from '../src/components/PageLayout/PageLayout';
import Ballot from '../src/components/Ballot/Ballot';
import VotesFeed from '../src/components/VotesFeed/VotesFeed';
import VotesResultChart from '../src/components/VotesResultChart/VotesResultChart';
import VotesHeader from '../src/components/VotesHeader/VotesHeader';
import { FETCH_ALL_VOTES_AND_FRANCHISES__QUERY, ON_VOTE_ADDED__SUBSCRIPTION } from '../src/graphql-queries';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    ballotWrapper: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '4px',
    },
    votesResultChartWrapper: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '4px',
      height: '100%',
      width: '100%',
    },
    votesFeedWrapper: {
      backgroundColor: theme.palette.common.white,
      borderRadius: '4px',
    },
  });
});

const Home: NextPage = () => {
  const classes = useStyles();
  const { loading, error, data, subscribeToMore } = useQuery(
    FETCH_ALL_VOTES_AND_FRANCHISES__QUERY,
  );

  /**
   * Effects
   */
  useEffect(() => {
    _subscribeOnVoteAdded();
  }, []);

  /**
   * Getters and setters
   */
  // https://www.apollographql.com/docs/react/data/subscriptions/#subscribing-to-updates-for-a-query
  const _subscribeOnVoteAdded = () => {
    subscribeToMore({
      document: ON_VOTE_ADDED__SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const { voteAdded } = subscriptionData.data;

        return {
          ...prev,
          votes: [voteAdded, ...prev.votes],
        };
      },
    });
  };

  /**
   * Renderers
   */
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <PageLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <VotesHeader />
        </Grid>

        <Grid item xs={12} sm={5} lg={3}>
          <div className={classes.ballotWrapper}>
            <Ballot options={data.franchises} />
          </div>
        </Grid>

        <Grid item xs={12} sm={7} lg={9}>
          <div className={classes.votesResultChartWrapper}>
            <VotesResultChart votes={data.votes} />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.votesFeedWrapper}>
            <VotesFeed voteLimit={5} votes={data.votes} />
          </div>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
