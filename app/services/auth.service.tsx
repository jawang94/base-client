import React, { useCallback, useContext } from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';

import { useApolloClient } from '@apollo/react-hooks';

import {
  useAppleSignInMutation,
  useAppleSignUpMutation,
  useGoogleSignInMutation,
  useGoogleSignUpMutation,
  useMeQuery,
  User,
  useSignInMutation,
  useSignUpMutation,
} from '../graphql/types';
import { logout } from '../redux/actions';

const MyContext = React.createContext<User | null>(null);
const cookies = new Cookies();

export const useMe = (): User | null => {
  return useContext(MyContext);
};

export const isSignedIn = (): boolean => {
  return !!cookies.get('authToken');
};

// Permitting explicit any since the actual clearStore() method returns any[]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSignOut = (): (() => Promise<any[]>) => {
  // Create separate token clear method for electron localStorage. Must clear the cookie and localstorage.
  const client = useApolloClient();
  const dispatch = useDispatch();

  return useCallback(() => {
    // "expires" represents the lifespan of a cookie. Beyond that date the cookie will
    // be deleted by the browser. "expires" cannot be viewed from "document.cookie"
    if (process.env.NODE_ENV === 'production') {
      cookies.remove('authToken', {
        secure: true,
        domain: '.guidelyte.dev',
        sameSite: 'none',
      });
    } else {
      cookies.remove('authToken');
    }
    dispatch(logout());

    // Clear cache
    return client.clearStore();
  }, [dispatch, client]);
};

export const useSignIn = useSignInMutation;
export const useSignUp = useSignUpMutation;
export const useAppleSignIn = useAppleSignInMutation;
export const useAppleSignUp = useAppleSignUpMutation;
export const useGoogleSignIn = useGoogleSignInMutation;
export const useGoogleSignUp = useGoogleSignUpMutation;
export const useUseMe = useMeQuery;
