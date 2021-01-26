import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useStore } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    medium: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  })
);

export default function UserAvatar(user: any) {
  const classes = useStyles();
  const store = useStore();
  const storeState = store.getState();
  const [userProfilePicture, setUserProfilePicture] = useState(
    user?.user?.data?.picture || storeState.user.data?.picture
  );

  useEffect(() => {
    setUserProfilePicture(storeState.user.data?.picture);
  }, [storeState.user.data]);

  return (
    <div className={classes.root}>
      <Avatar
        alt="guidleyte-user-avatar"
        src={userProfilePicture}
        className={classes.medium}
      />
    </div>
  );
}
