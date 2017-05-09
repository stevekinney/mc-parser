import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import injectEmailProperties from './inject-email-properties';
import Application from './components/Application';

import './index.css';

injectEmailProperties();

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
