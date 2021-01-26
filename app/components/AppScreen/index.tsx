import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useMeQuery } from '../../graphql/types';
import { loginUserSuccess } from '../../redux/actions/index';
import AppBody from './AppBody';
import AppHeader from './AppHeader';

const Container = styled.div`
  overflow-x: hidden;
  box-sizing: border-box;
  background: #ffffff;
  color: rgb(55, 53, 47);
  fill: currentcolor;
  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: auto;
`;

const AppSpacer = styled.div`
  width: 100%;
  height: 80px;
`;

const App: FC = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useMeQuery();

  useEffect(() => {
    if (data?.me) {
      dispatch(loginUserSuccess(data.me));
    } else {
      // console.log(data, error, loading);
    }
  }, [data, dispatch, error, loading]);

  return (
    <Container>
      <div>
        <AppHeader />
        <AppSpacer />
        <AppBody />
      </div>
    </Container>
  );
};

export default App;
