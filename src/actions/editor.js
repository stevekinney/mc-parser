/* eslint import/prefer-default-export: 0 */

export const setSelection = cursorPosition => ({
  type: 'SET_SELECTION',
  cursorPosition,
});

export const releaseSelection = () => ({
  type: 'RELEASE_SELECTION',
});

export const updateCursorPosition = cursorPosition => ({
  type: 'UPDATE_CURSOR_POSITION',
  cursorPosition,
});
