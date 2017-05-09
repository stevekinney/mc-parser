import { compose, createStore } from 'redux';

import reducer from './reducers';
import initialState from './initial-state';

const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(...enhancers),
);

export default store;
