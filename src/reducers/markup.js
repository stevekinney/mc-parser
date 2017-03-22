import initialState from '../initial-state.js';

export default function markupReducer(state = initialState.markup, action) {
  console.log(action.markup);
  switch(action.type) {
    case 'UPDATE_MARKUP':
      return action.markup;
    default:
      return state;
  }
}