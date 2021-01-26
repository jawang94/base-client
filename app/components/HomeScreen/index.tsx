import React, { FC } from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Emoji from '../Emoji';

const Block = styled.div`
  margin-top: 40px;
`;

const useStyles = makeStyles({
  home: {
    margin: '0 auto',
    textAlign: 'center',
  },
  text: {
    fontSize: 'var(--body-lg-font-size)',
    lineHeight: 'var(--body-lg-line-height)',
    letterSpacing: 'var(--body-lg-letter-spacing)',
    opacity: 0.4,
  },
});

const UserDashboardScreen: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Block>
        <div className={classes.home}>
          <Typography variant="h1" component="h2" gutterBottom>
            <Emoji symbol="🚧" label="under-construction" />
          </Typography>

          <Typography variant="subtitle1" className={classes.text} gutterBottom>
            I wonder what cool app we&apos;re going to build today.
          </Typography>
        </div>
      </Block>

      <Block>
        <div className={classes.home}>
          <Typography variant="h1" component="h2" gutterBottom>
            <Emoji symbol="🌲" label="under-construction" />
          </Typography>

          <Typography variant="subtitle1" className={classes.text} gutterBottom>
            Placeholder
          </Typography>
        </div>
      </Block>

      <Block>
        <div className={classes.home}>
          <Typography variant="h1" component="h2" gutterBottom>
            <Emoji symbol="🌲" label="under-construction" />
          </Typography>

          <Typography variant="subtitle1" className={classes.text} gutterBottom>
            Placeholder
          </Typography>
        </div>
      </Block>

      <Block>
        <div className={classes.home}>
          <Typography variant="h1" component="h2" gutterBottom>
            <Emoji symbol="🌲" label="under-construction" />
          </Typography>

          <Typography variant="subtitle1" className={classes.text} gutterBottom>
            Placeholder
          </Typography>
        </div>
      </Block>
    </>
  );
};

export default UserDashboardScreen;
