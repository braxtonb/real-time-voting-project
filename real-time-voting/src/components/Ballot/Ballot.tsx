import { useState } from 'react';
import {
  Theme,
  makeStyles,
  createStyles,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Radio,
  Button,
} from '@material-ui/core';
import { gql, useMutation, OperationVariables } from '@apollo/client';

const ADD_VOTE__MUTATION = gql`
  mutation AddVoteMutation($vote: AddVoteInput) {
    addVote(vote: $vote) {
      code
      success
      message
      newVote {
        id
        franchise {
          id
          title
        }
        username
        created
      }
    }
  }
`;

const INITIAL_VALUE: number = -1;
const INITIAL_ERROR: boolean = false;
const INITIAL_HELPER_TEXT: string = '';
const INITIAL_IS_VOTE_BUTTON_DISABLED: boolean = true;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }),
);

interface BallotProps {
  options: {
    id: number;
    title: string;
  }[];
}

const Ballot: React.FC<BallotProps> = ({ options }) => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(INITIAL_VALUE);
  const [error, setError] = useState<boolean>(INITIAL_ERROR);
  const [helperText, setHelperText] = useState<string>(INITIAL_HELPER_TEXT);
  const [isVoteButtonDisabled, setIsVoteButtonDisabled] = useState<boolean>(
    INITIAL_IS_VOTE_BUTTON_DISABLED,
  );
  const [addVote] = useMutation(ADD_VOTE__MUTATION);

  const _handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = parseInt((event.target as HTMLInputElement).value, 10);

    setValue(nextValue);
    setIsVoteButtonDisabled(false);
    setError(false);
    setHelperText('');
  };

  const _handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof value !== 'number' || value === INITIAL_VALUE) {
      // sanity check
      setError(true);
      setHelperText('Please select a franchise');
      return;
    }

    const variables: OperationVariables = {
      vote: {
        franchiseId: value,
        username: 'User 1',
      },
    };

    addVote({ variables });
    setValue(INITIAL_VALUE);
    setIsVoteButtonDisabled(INITIAL_IS_VOTE_BUTTON_DISABLED);
    setError(false);
    setHelperText('');
  };

  return (
    <form onSubmit={_handleSubmit}>
      <FormControl
        component="fieldset"
        error={error}
        className={classes.formControl}
      >
        <FormLabel component="legend">
          Which franchise is your favorite?
        </FormLabel>
        <RadioGroup
          aria-label="franchise"
          name="franchise"
          value={value}
          onChange={_handleRadioChange}
        >
          {options.map((o) => (
            <FormControlLabel
              key={o.id}
              value={o.id}
              control={<Radio color="primary" />}
              label={o.title}
            />
          ))}
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          className={classes.button}
          disabled={isVoteButtonDisabled}
        >
          Vote
        </Button>
      </FormControl>
    </form>
  );
};

export default Ballot;
