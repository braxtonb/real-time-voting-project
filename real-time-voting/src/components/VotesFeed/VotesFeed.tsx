import Link from 'next/link';
import { makeStyles, Theme, createStyles, Button } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import { Vote } from '../../constants/types';
import { FRANCHISE_COLORS } from '../../constants';
import { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    votesFeedHeader: {
      padding: '24px 24px 0',
    },
    votesFeedContainer: {
      paddingBottom: '52px',
      position: 'relative',
    },
    timeline: {
      overflow: 'hidden',
      position: 'relative',
    },
    timelineOppositeContent: {
      maxWidth: '120px',
    },
    viewVoteLogsContainer: {
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(1),
      position: 'absolute',
      width: '100%',
    },
  });
});

interface VotesFeedProps {
  voteLimit?: number;
  votes: Vote[];
}

const AnimatedTimelineItem = animated(TimelineItem);

const VotesFeed: React.FC<VotesFeedProps> = ({ voteLimit, votes }) => {
  const classes = useStyles();
  const [viewVoteLogsButton, setViewVoteLogsButton] = useState<boolean>(votes.length > (voteLimit ?? votes.length));

  // https://alligator.io/react/advanced-react-spring/
  const transitions = useTransition(
    votes.slice(0, voteLimit ?? votes.length),
    v => v.id,
    {
      // set an initial to prevent animation on load
      // set a very small initial translate y to ensure leave translate occurs
      initial: { transform: 'translate(0, 0.000001px)', opacity: 1 },
      from: { transform: 'translate(100%, 50%)', opacity: 0 },
      enter: { transform: 'translate(0, 0)', opacity: 1 },
      update: { transform: 'translate(0, 0)', opacity: 1 },
      leave: !voteLimit ? null : { transform: 'translate(0, 100%)', opacity: 0, position: 'absolute', height: '70px', width: '100%', bottom: '6px', left: '16px' },
    },
  );

  useEffect(() => {
    if (!viewVoteLogsButton && votes.length > voteLimit) {
      setViewVoteLogsButton(true);
    }
  }, [votes.length]);

  return (
    <div className={classes.votesFeedContainer}>
      <Typography color="textSecondary" className={classes.votesFeedHeader}>Recent Votes Feed</Typography>
      <Timeline className={classes.timeline}>
        {transitions.map(({ item, props, key }) => (
          <AnimatedTimelineItem key={key} style={props}>
            <TimelineOppositeContent
              className={classes.timelineOppositeContent}
            >
              <Typography variant="body2" color="textSecondary">
                {new Date(item.created).toLocaleTimeString()}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                style={{ backgroundColor: FRANCHISE_COLORS[item.franchise.id] }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">{item.franchise.title}</Typography>
              <Typography variant="caption">{item.username}</Typography>
            </TimelineContent>
          </AnimatedTimelineItem>
        ))}
      </Timeline>
      {/* use this if timeline animation is not desired <Timeline>
        {votes.slice(0, voteLimit).map((v) => (
          <TimelineItem key={v.id}>
            <TimelineOppositeContent
              className={classes.timelineOppositeContent}
            >
              <Typography variant="body2" color="textSecondary">
                {new Date(v.created).toLocaleTimeString()}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                style={{ backgroundColor: FRANCHISE_COLORS[v.franchise.id] }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">{v.franchise.title}</Typography>
              <Typography variant="caption">{v.username}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
        </Timeline> */}
      {viewVoteLogsButton && <div className={classes.viewVoteLogsContainer}>
        <Link href="/logs" passHref>
          <Button color="primary" variant="outlined" component="a">View Vote Logs</Button>
        </Link>
      </div>}
    </div>
  );
};

export default VotesFeed;
