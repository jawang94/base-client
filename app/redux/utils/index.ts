import { AuthWrapperDecorator } from 'redux-auth-wrapper';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';

import routes from '../../common/constants/routes.json';
import Loading from '../../components/Loading';

export function createConstants(...constants: any[]) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer(initialState: any, reducerMap: any) {
  return (state = initialState, action: any) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

export function checkHttpStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  throw error;
}

export function parseJSON(response: any) {
  return response.json();
}

const locationHelper = locationHelperBuilder({});

const userIsAuthenticatedDefaults = {
  authenticatedSelector: (state: any) =>
    state.user.isAuthenticated || state.user.data,
  authenticatingSelector: (state: any) => state.user.isAuthenticating,
  wrapperDisplayName: 'UserIsAuthenticated',
};

export const userIsAuthenticated = connectedAuthWrapper(
  userIsAuthenticatedDefaults
);

export const userIsAuthenticatedRedir: AuthWrapperDecorator<any> = connectedRouterRedirect(
  {
    ...userIsAuthenticatedDefaults,
    AuthenticatingComponent: Loading,
    redirectPath: routes.LOGIN,
  }
);

const userIsNotAuthenticatedDefaults = {
  // Want to redirect the user when they are done loading and authenticated
  authenticatedSelector: (state: any) =>
    !state.user.isAuthenticated || !state.user.data,
  wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsNotAuthenticated = connectedAuthWrapper(
  userIsNotAuthenticatedDefaults
);

export const userIsNotAuthenticatedRedir: AuthWrapperDecorator<any> = connectedRouterRedirect(
  {
    ...userIsNotAuthenticatedDefaults,
    redirectPath: (_state, ownProps) =>
      locationHelper.getRedirectQueryParam(ownProps) || routes.HOME,
    allowRedirectBack: false,
  }
);
