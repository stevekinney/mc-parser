import { combineReducers } from 'redux';
import html from './html';
import editor from './editor';

const reducer = combineReducers({
  html,
  editor,
});

export default reducer;
