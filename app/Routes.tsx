import { ConnectedRouter } from 'connected-react-router';
/* eslint react/jsx-props-no-spreading: off */
import React, { Fragment } from 'react';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import client from './client';
import routes from './common/constants/routes.json';
import App from './components/AppScreen';
import GlobalStyles from './global.styles';
import { configuredStore, history } from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#6CA59B' },
    secondary: { main: '#F5D427' },
  },
  typography: {
    fontFamily: [
      'inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    // Applied to the menu item text inside <li> elements
    MuiTypography: {
      body1: {
        fontSize: 'var(--heading-sm-font-size)',
      },
    },
    MuiInputBase: {
      root: {
        fontSize: 'var(--heading-sm-font-size)',
      },
    },
  },
});

export default function Routes() {
  const store = configuredStore();

  const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

  return (
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles />
        <ApolloProvider client={client}>
          <Provider store={store}>
            {/* Context provider */}
            <ConnectedRouter history={history}>
              <Route
                path={[routes.AUTH, routes.HOME, routes.DASHBOARD]}
                component={App}
              />
            </ConnectedRouter>
          </Provider>
        </ApolloProvider>
      </MuiThemeProvider>
    </AppContainer>
  );
}
