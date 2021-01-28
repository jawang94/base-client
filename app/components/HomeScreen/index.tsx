import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Emoji from '../Emoji';
import { useResizeImageMutation } from '../../graphql/types';

const styles = () =>
  createStyles({
    input: {
      '&::placeholder': {
        fontStyle: 'italic',
        textAlign: 'center',
      },
    },
  });

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

const useResizeImage = useResizeImageMutation;

const UserDashboardScreen: FC = () => {
  const classes = useStyles();
  const [resizeImage] = useResizeImage();
  const [image, setImage] = useState('');
  const [size, setSize] = useState(0);

  const handleClick = async (width: number) => {
    console.log(size);
    resizeImage({
      variables: {
        url:
          'https://s3-us-west-2.amazonaws.com/makersdistillery/1000x/4cae19e86a96390617c525f27377b2c3_948174.jpg',
        width,
      },
    })
      .then((result: any) => {
        setImage(result.data.resizeImage.image.base64);
        return true;
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <>
      <Block>
        <div className={classes.home}>
          <Typography variant="h1" component="h2" gutterBottom>
            <Emoji symbol="🖼️" label="under-construction" />
          </Typography>
          <Input
            inputProps={styles}
            placeholder="Image size"
            onChange={(event: any) => setSize(parseInt(event.target.value, 10))}
          />

          <Button onClick={() => handleClick(size)}>Render Image</Button>
        </div>
      </Block>
      <Block>
        <div className={classes.home}>
          {image ? (
            <img id="img" alt="resized" src={image} />
          ) : (
            <Typography
              variant="subtitle1"
              className={classes.text}
              gutterBottom
            >
              Image placeholder
            </Typography>
          )}
        </div>
      </Block>
    </>
  );
};

export default UserDashboardScreen;
