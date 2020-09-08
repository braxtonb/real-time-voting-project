import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    votesHeader: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  });
});

const VotesHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.votesHeader}>
      <Typography variant="h5">Real Time Voting</Typography>
    </div>
  );
};

export default VotesHeader;