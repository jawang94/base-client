import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import user from './user';

// eslint-disable-next-line import/no-cycle

export default (history: History) =>
  combineReducers({
    user,
    router: connectRouter(history),
  });
