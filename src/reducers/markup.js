import initialState from '../initial-state.js';

export default function markupReducer(state = initialState.markup, action) {
  switch(action.type) {
    case 'UPDATE_MARKUP':
      return {
        markup: action.markup,
        ast: action.ast
      };
    default:
      return state;
  }
}
