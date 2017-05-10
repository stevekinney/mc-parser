import initialState from '../initial-state.js';

export default function markupReducer(state = initialState.editor, action) {
  switch (action.type) {
    case 'SET_SELECTION':
      return {
        isSelecting: true,
        cursorPosition: action.cursorPosition,
      };
    case 'RELEASE_SELECTION':
      return {
        isSelecting: false,
      };
    case 'UPDATE_CURSOR_POSITION':
      return {
        isSelecting: false,
        cursorPosition: action.cursorPosition,
      };
    default:
      return state;
  }
}
