import { push } from 'connected-react-router';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import routes from '../../common/constants/routes.json';
import {
  AppleSignInMutationVariables,
  AppleSignUpMutationVariables,
  GoogleSignInMutationVariables,
  GoogleSignUpMutationVariables,
  SignInMutationVariables,
  SignUpMutationVariables,
} from '../../graphql/types';
import constants from '../constants';

type State = { a: string };
export type AppDispatch = ThunkDispatch<State, any, AnyAction>;

export const signupUserSuccess = (user: any) => {
  return {
    type: constants.SIGNUP_USER_SUCCESS,
    payload: { user },
  };
};

export const signupUserFailure = (error: any) => {
  localStorage.removeItem('cookie');
  return {
    type: constants.SIGNUP_USER_FAILURE,
    payload: {
      fullError: error.graphQLErrors,
      errorField: error.message.split(':')[1].slice(1),
      errorMessage: error.message.split(':')[2].slice(1),
    },
  };
};

export const signupUserRequest = () => {
  return {
    type: constants.SIGNUP_USER_REQUEST,
  };
};

export const loginUserSuccess = (user: any) => {
  return {
    type: constants.LOGIN_USER_SUCCESS,
    payload: { user },
  };
};

export const loginUserFailure = (error: any) => {
  localStorage.removeItem('cookie');
  return {
    type: constants.LOGIN_USER_FAILURE,
    payload: {
      fullError: error.graphQLErrors,
      errorField: error.message.split(':')[1].slice(1),
      errorMessage: error.message.split(':')[2].slice(1),
    },
  };
};

export const loginUserRequest = () => {
  return {
    type: constants.LOGIN_USER_REQUEST,
  };
};

export const updateUserSuccess = (user: any) => {
  return {
    type: constants.UPDATE_USER_SUCCESS,
    payload: { user },
  };
};

export const logout = () => {
  return {
    type: constants.LOGOUT_USER,
  };
};

export const logoutAndRedirect = () => {
  return (dispatch: any) => {
    dispatch(logout());
    dispatch(push(routes.LOGIN));
  };
};

export const loginUser = (
  method: (options?: any) => Promise<any>,
  values: SignInMutationVariables
) => {
  return async function loginUserDispatch(
    dispatch: any
  ): Promise<{ payload: {}; type: string }> {
    dispatch(loginUserRequest());

    return method({ variables: values })
      .then((user: any) => {
        try {
          dispatch(loginUserSuccess(user));

          return user;
        } catch (e) {
          return e;
        }
      })
      .catch((error: any) => {
        return dispatch(loginUserFailure(error));
      });
  };
};

export const signupUser = (
  method: (options?: any) => Promise<any>,
  values: SignUpMutationVariables
) => {
  return async function signupUserDispatch(
    dispatch: any
  ): Promise<{ payload: {}; type: string }> {
    dispatch(signupUserRequest());

    return method({ variables: values })
      .then((user: any) => {
        try {
          dispatch(signupUserSuccess(user));

          return user;
        } catch (e) {
          return e;
        }
      })
      .catch((error: any) => {
        return dispatch(signupUserFailure(error));
      });
  };
};

export const appleAuth = (
  method: (options?: any) => Promise<any>,
  values: AppleSignInMutationVariables | AppleSignUpMutationVariables,
  action: string
) => {
  return async function loginUserDispatch(
    dispatch: any
  ): Promise<{ payload: {}; type: string }> {
    if (action === 'appleSignUp') {
      dispatch(signupUserRequest());
    } else {
      dispatch(loginUserRequest());
    }

    return method({ variables: values })
      .then(async (user: any) => {
        try {
          if (action === 'appleSignUp') {
            await dispatch(signupUserSuccess(user.data[action]));
          } else {
            await dispatch(loginUserSuccess(user.data[action]));
          }

          return user;
        } catch (e) {
          return e;
        }
      })
      .catch((error: any) => {
        return dispatch(loginUserFailure(error));
      });
  };
};

export const googleAuth = (
  method: (options?: any) => Promise<any>,
  values: GoogleSignInMutationVariables | GoogleSignUpMutationVariables,
  action: string
) => {
  return async function loginUserDispatch(
    dispatch: any
  ): Promise<{ payload: {}; type: string }> {
    if (action === 'googleSignUp') {
      dispatch(signupUserRequest());
    } else {
      dispatch(loginUserRequest());
    }

    const result = await method({ variables: values })
      .then(async (user: any) => {
        try {
          if (action === 'googleSignUp') {
            await dispatch(signupUserSuccess(user.data[action]));
          } else {
            await dispatch(loginUserSuccess(user.data[action]));
          }

          return user;
        } catch (e) {
          return e;
        }
      })
      .catch((error: any) => {
        return dispatch(loginUserFailure(error));
      });

    return result;
  };
};
