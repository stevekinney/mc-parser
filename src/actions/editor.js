/* eslint import/prefer-default-export: 0 */

export const setSelection = cursorPosition => ({
  type: 'SET_SELECTION',
  cursorPosition,
});
