const findLineBreaks = (string) => {
  const lineBreaks = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '\n') lineBreaks.push(i);
  }
  return lineBreaks;
};

const indexToRowAndColumn = (string, index) => {
  const lineBreaks = findLineBreaks(string.slice(0, index));
  if (!lineBreaks.length) return [0, index];

  const lastLineBreak = lineBreaks[lineBreaks.length - 1];
  const row = lineBreaks.length;
  const column = index - lastLineBreak - 1;

  return [row, column];
};

export default indexToRowAndColumn;
export { findLineBreaks };
