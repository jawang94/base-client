import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import routes from '../../common/constants/routes.json';
import { useSignIn, useSignUp } from '../../services/auth.service';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

export const preLoadSignInForm = () => {
  return import(
    /* webpackChunkName: "SignInForm" */
    /* webpackPrefetch: true */
    './SignInForm'
  );
};

export const preLoadSignUpForm = () => {
  return import(
    /* webpackChunkName: "SignUpForm" */
    /* webpackPrefetch: true */
    './SignUpForm'
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh;
`;

// const Icon = styled.img`
//   width: 57px;
//   height: auto;
//   margin-left: auto;
//   margin-right: auto;
//   padding-top: 70px;
//   display: block;
// `;

const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 68px;
  text-align: center;
  letter-spacing: 0.01em;
`;

const TermsAndConditions = styled.div`
  width: 500px;
  margin-bottom: 12vh;
  font-size: 12px;
  color: rgba(55, 53, 47, 0.4);
  text-align: center;
`;

const TermsAndConditionsMobile = styled.div`
  width: 100%;
  margin-bottom: 12vh;
  font-size: 12px;
  color: rgba(55, 53, 47, 0.4);
  text-align: center;
`;

const Auth: FC = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const dispatch = useDispatch();
  const location = useLocation();

  const signInProps = {
    signIn,
    dispatch,
  };

  const signUpProps = {
    signUp,
    dispatch,
  };

  return (
    <Container className="AuthScreen-screen">
      <Title className="AuthScreen-title">
        {location.pathname === routes.LOGIN ? 'Log In' : 'Sign Up'}
      </Title>

      <Switch>
        <Route
          exact
          path={routes.LOGIN}
          render={() => <SignInForm {...signInProps} />}
        />
        <Route
          exact
          path={routes.SIGNUP}
          render={() => <SignUpForm {...signUpProps} />}
        />
      </Switch>

      <Box display={{ xs: 'block', sm: 'none' }} m={1}>
        <TermsAndConditionsMobile>
          <p style={{ marginBottom: 0 }}>
            By clicking “Continue with Google/Email/SAML” above, you acknowledge
            that you have read and understood, and agree to Guidelyte&apos;s
            Terms &amp; Conditions and Privacy Policy.
          </p>
        </TermsAndConditionsMobile>
      </Box>
      <Box display={{ xs: 'none', sm: 'block' }} m={1}>
        <TermsAndConditions>
          <p style={{ marginBottom: 0 }}>
            By clicking “Continue with Google/Email/SAML” above, you acknowledge
            that you have read and understood, and agree to Guidelyte&apos;s
            Terms &amp; Conditions and Privacy Policy.
          </p>
        </TermsAndConditions>
      </Box>
    </Container>
  );
};

export default Auth;
