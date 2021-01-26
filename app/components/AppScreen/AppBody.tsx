import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../common/constants/routes.json';
import LoadingSpinner from '../LoadingSpinner';

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from '../../redux/utils/index';

const StyledBody = styled.main`
  color: rgb(4, 4, 4);
  fill: currentcolor;
  line-height: 1.5;
  font-family: inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol';
  background-color: rgb(255, 254, 252);
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
  background-position: initial initial;
  background-repeat: initial initial;
`;

const Section = styled.section`
  padding-left: 60px;
  padding-right: 60px;
  width: 100%;
  margin: 40px auto;
  overflow: visible;
`;

const InnerSection = styled.div`
  width: 100%;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const Page = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 0px auto;
`;

const LazyAuthScreen = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Auth" */
      /* preFetch: true */
      '../AuthScreen'
    )
);

const AuthScreen = (props: Record<string, any>) => (
  <React.Suspense fallback={LoadingSpinner}>
    <LazyAuthScreen {...props} />
  </React.Suspense>
);

const LazyHomeScreen = React.lazy(
  () =>
    import(
      /* webpackChunkName: "Home" */
      /* preFetch: true */
      '../HomeScreen'
    )
);

const HomeScreen = (props: Record<string, any>) => (
  <React.Suspense fallback={LoadingSpinner}>
    <LazyHomeScreen {...props} />
  </React.Suspense>
);

const AppBody: FC = () => {
  return (
    <>
      <StyledBody>
        <Section>
          <InnerSection>
            <Page>
              <Switch>
                <Route
                  path={routes.AUTH}
                  component={userIsNotAuthenticatedRedir(AuthScreen)}
                />
                <Route
                  path={routes.HOME}
                  component={userIsAuthenticatedRedir(HomeScreen)}
                />
              </Switch>
              <Route exact path="/">
                <Redirect to={routes.HOME} />
              </Route>
            </Page>
          </InnerSection>
        </Section>
      </StyledBody>
    </>
  );
};

export default AppBody;
