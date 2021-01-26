import { createReducer } from '../utils';
import constants from '../constants';
import { isSignedIn } from '../../services/auth.service';

const initialState = {
  isSigningUp: false,
  isSignedUp: false,
  isAuthenticated: isSignedIn(),
  isAuthenticating: false,
  statusText: null,
  data: null,
};

export default createReducer(initialState, {
  [constants.SIGNUP_USER_REQUEST]: (state: any) => {
    return {
      ...state,
      isSigningUp: true,
      isAuthenticating: true,
      statusText: null,
    };
  },
  [constants.SIGNUP_USER_SUCCESS]: (state: any, payload: any) => {
    return {
      ...state,
      isSigningUp: false,
      isSignedUp: true,
      isAuthenticating: false,
      isAuthenticated: true,
      data: payload.user,
      statusText: 'You have successfully signed up.',
    };
  },
  [constants.SIGNUP_USER_FAILURE]: (state: any, payload: any) => {
    return {
      ...state,
      isSigningUp: false,
      isSignedUp: false,
      isAuthenticating: false,
      isAuthenticated: false,
      statusText: `Authentication Error: ${payload.status} ${payload.statusText}`,
    };
  },
  [constants.LOGIN_USER_REQUEST]: (state: any) => {
    return { ...state, isAuthenticating: true, statusText: null };
  },
  [constants.LOGIN_USER_SUCCESS]: (state: any, payload: any) => {
    return {
      ...state,
      isAuthenticating: false,
      isAuthenticated: true,
      data: payload.user,
      statusText: 'You have been successfully logged in.',
    };
  },
  [constants.LOGIN_USER_FAILURE]: (state: any, payload: any) => {
    return {
      ...state,
      isAuthenticating: false,
      isAuthenticated: false,
      statusText: `Authentication Error: ${payload.status} ${payload.statusText}`,
    };
  },
  [constants.UPDATE_USER_SUCCESS]: (state: any, payload: any) => {
    return {
      ...state,
      data: payload.user,
      statusText: 'User has been successfully updated.',
    };
  },
  [constants.LOGOUT_USER]: () => {
    return {
      isSigningUp: false,
      isSignedUp: false,
      isAuthenticated: false,
      isAuthenticating: false,
      statusText: 'You have been successfully logged out.',
      data: null,
    };
  },
});
