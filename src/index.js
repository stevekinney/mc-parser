import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import initialState from './initial-state';
import injectEmailProperties from './inject-email-properties';

import Application from './components/Application';

const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import './index.css';

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(...enhancers),
);

injectEmailProperties();

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
