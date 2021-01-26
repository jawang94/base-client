import { push } from 'connected-react-router';
import React, { FC, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import scriptjs from 'scriptjs';
import styled from 'styled-components';

import googleLogoSmallWhite from '../../assets/googleLogoSmallWhite.svg';
import errors from '../../common/constants/errors.json';
import routes from '../../common/constants/routes.json';
import { googleAuth } from '../../redux/actions';
import { useGoogleSignIn, useGoogleSignUp } from '../../services/auth.service';
import TransitionAlert from '../TransitionAlert';

declare let window: any;

const StyledGoogleButton = styled.div`
  cursor: pointer;
  -webkit-user-select: none;
  transition: background 20ms ease-in;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 36px;
  border-radius: 3px;
  color: #ffffff;
  fill: rgb(55, 53, 47);
  font-size: 14px;
  line-height: 1;
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 500;
  border: 1px solid rgb(55, 53, 47);
  width: 100%;
  background-color: var(--guidelyte-green);

  &:hover {
    background-color: var(--guidelyte-green-dark);
  }

  &:focus {
    outline: none;
  }
`;

const StyledGoogleLogo = styled.img`
  display: block;
  fill: inherit;
  flex-shrink: 0;
  -webkit-backface-visibility: hidden;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  margin-bottom: 2px;
`;

const GoogleLogin: FC = () => {
  const [googleSignIn] = useGoogleSignIn();
  const [googleSignUp] = useGoogleSignUp();
  const [error, setError] = useState('');
  const store = useStore();
  const storeState = store.getState();
  const dispatch: any = useDispatch();
  const location = useLocation();

  const onSuccess = async (successPayload: any) => {
    return dispatch(
      googleAuth(
        location.pathname === routes.LOGIN ? googleSignIn : googleSignUp,
        successPayload,
        location.pathname === routes.LOGIN ? 'googleSignIn' : 'googleSignUp'
      )
    ).then(
      (response: {
        payload: { errorField?: string; errorMessage?: string };
        type: string;
      }) => {
        if (
          ['SIGNUP_USER_FAILURE', 'LOGIN_USER_FAILURE'].includes(
            response.type
          ) &&
          response.payload.errorField &&
          response.payload.errorMessage
        ) {
          setError(response.payload.errorMessage);
        } else if (
          ['SIGNUP_USER_SUCCESS', 'LOGIN_USER_SUCCESS'].includes(response.type)
        ) {
          if (storeState.user.isAuthenticated === true) {
            dispatch(push(routes.HOME));
          }
        }

        return response;
      }
    );
  };

  // if failure comes directly from google API
  const onFailure = (failurePayload: any) => {
    console.error(failurePayload);
    setError(errors.GENERIC);
  };

  // Client ID and API key from the Developer Console
  const CLIENT_ID =
    '481557668322-441msoqcaa7rfau3hccn3k6v6i3h2int.apps.googleusercontent.com';
  const API_KEY = 'AIzaSyBpPypYChfn_jVml6WSlA2ZagMXggspL0E';
  const SCOPES = 'profile';

  scriptjs('https://apis.google.com/js/api.js', () => {
    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */

    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    });
  });

  /**
   *  Sign in the user upon button click.
   */
  function handleAuthClick(event: any) {
    event.preventDefault();
    window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        let googleUser = null;

        if (window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
          const profile = window.gapi.auth2
            .getAuthInstance()
            .currentUser.get()
            .getBasicProfile();
          googleUser = {
            id: profile.getId(),
            fullName: profile.getName(),
            givenName: profile.getGivenName(),
            familyName: profile.getFamilyName(),
            imageURL: profile.getImageUrl(),
            email: profile.getEmail(),
          };
        }

        return onSuccess(googleUser);
      })
      .catch((err: any) => {
        onFailure(err);
        throw Error(err);
      });
  }

  return (
    <>
      <StyledGoogleButton
        title="google-auth-button"
        id="authorize-button"
        onClick={handleAuthClick}
        role="button"
        tabIndex={0}
      >
        <StyledGoogleLogo src={googleLogoSmallWhite} alt="Google Logo" />
        Continue with Google
      </StyledGoogleButton>
      <TransitionAlert message={error} setError={setError} />
    </>
  );
};

export default GoogleLogin;
