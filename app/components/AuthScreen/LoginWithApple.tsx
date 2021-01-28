import { push } from 'connected-react-router';
/* eslint-disable @typescript-eslint/camelcase */
import React, { FC, useState } from 'react';
import { useDispatch, useStore } from 'react-redux';

import errors from '../../common/constants/errors.json';
import routes from '../../common/constants/routes.json';
import { appleAuth } from '../../redux/actions';
import { useAppleSignIn, useAppleSignUp } from '../../services/auth.service';
import TransitionAlert from '../TransitionAlert';
import AppleLogin from './AppleLogin';

export interface AppleSuccessPayload {
  authorization: {
    code: string;
    id_token: string;
  };
  user?: {
    email: string;
    name: {
      firstName: string;
      lastName: string;
    };
  };
}

interface AppleFailurePayload {
  error: string;
}

const LoginWithApple: FC = () => {
  const [appleSignIn] = useAppleSignIn();
  const [appleSignUp] = useAppleSignUp();
  const store = useStore();
  const storeState = store.getState();
  const dispatch: any = useDispatch();
  const [error, setError] = useState('');

  const onSuccess = (successPayload: AppleSuccessPayload) => {
    // apple returns the user object only on first sign in, therefore we must be sure to capture with sign up method
    if (successPayload.user) {
      const {
        email,
        name: { firstName, lastName },
      } = successPayload.user;

      return dispatch(
        appleAuth(
          appleSignUp,
          {
            firstName,
            lastName,
            email,
            token: successPayload.authorization.id_token,
          },
          'appleSignUp'
        )
      ).then(
        (response: {
          payload: { errorField?: string; errorMessage?: string };
          type: string;
        }) => {
          if (
            response.type === 'LOGIN_USER_FAILURE' &&
            response.payload.errorField &&
            response.payload.errorMessage
          ) {
            setError(response.payload.errorMessage);
          } else if (response.type === 'LOGIN_USER_SUCCESS') {
            if (storeState.user.isAuthenticated === true) {
              dispatch(push(routes.HOME));
            }
          }

          return response;
        }
      );
    }

    // else, sign in with the authorization object
    return dispatch(
      appleAuth(
        appleSignIn,
        { token: successPayload.authorization.id_token },
        'appleSignIn'
      )
    ).then(
      (response: {
        payload: { errorField?: string; errorMessage?: string };
        type: string;
      }) => {
        if (
          response.type === 'LOGIN_USER_FAILURE' &&
          response.payload.errorField &&
          response.payload.errorMessage
        ) {
          setError(response.payload.errorMessage);
        } else if (response.type === 'LOGIN_USER_SUCCESS') {
          if (storeState.user.isAuthenticated === true) {
            dispatch(push(routes.HOME));
          }
        }

        return response;
      }
    );
  };

  // if failure comes directly from apple API
  const onFailure = (failurePayload: AppleFailurePayload) => {
    setError(failurePayload.error || errors.GENERIC);
  };

  const settings = {
    clientId: 'com.guidelyte.client',
    redirectURI: document.location.origin,
    scope: 'name email',
    state: '',
    responseType: 'code',
    responseMode: 'query',
    nonce: '',
    usePopup: true,
    onSuccess,
    onFailure,
  };

  return (
    <>
      <AppleLogin {...settings} />
      <TransitionAlert message={error} setError={setError} />
    </>
  );
};

export default LoginWithApple;
