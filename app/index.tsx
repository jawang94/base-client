import React from 'react';
import { render } from 'react-dom';

import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

// Rendering the component on the DOM
document.addEventListener('DOMContentLoaded', () =>
  render(<Routes />, document.getElementById('root'))
);

// https://bit.ly/CRA-PWA
serviceWorker.unregister();
