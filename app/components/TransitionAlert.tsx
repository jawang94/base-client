import React, { FC, useEffect, useRef } from 'react';

import { Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

import useClickOutside from '../hooks/use-click-outside';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  })
);

type TransitionAlertProps = {
  message: string;
  setError: Function;
};

const TransitionAlert: FC<TransitionAlertProps> = (props) => {
  const { message, setError } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const wrapperRef = useRef(null);

  // A hook that accepts a ReactDOM ref object and an array of Functions[] containing actions to execute
  useClickOutside({
    ref: wrapperRef,
    actions: [() => setOpen(false), () => setError('')],
  });

  useEffect(() => {
    if (message) {
      setOpen(true);
    } else {
      setOpen(false);
      setError('');
    }
  }, [message, setError]);

  return (
    <div ref={wrapperRef} className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity="warning"
          action={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Typography variant="subtitle1">{message}</Typography>
        </Alert>
      </Collapse>
    </div>
  );
};

export default TransitionAlert;
