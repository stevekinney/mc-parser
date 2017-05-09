import indexToRowAndColumn, { findLineBreaks } from './index-to-row-and-column';

describe('indexToRowAndColumn', () => {
  it('should work on a one line string', () => {
    const string = 'Hello World';
    const [row, column] = indexToRowAndColumn(string, 4);
    expect(row).toBe(0);
    expect(column).toBe(4);
  });

  it('should work on a two line string', () => {
    const string = 'x\ny'.trim();
    const [row, column] = indexToRowAndColumn(string, 2);
    expect(row).toBe(1);
    expect(column).toBe(0);
  });

  it('should work with some markup', () => {
    const markup = '<div>\n  <h1>Hello World</h1>\n  <p>Hi there</p>\n</div>';
    const [row, column] = indexToRowAndColumn(markup, 8);
    expect(row).toBe(1);
    expect(column).toBe(2);
  });
});

describe('findLineBreaks', () => {
  it('should return an array of all line breaks', () => {
    const [first, second] = findLineBreaks('a\nb\nc');
    expect(first).toBe(1);
    expect(second).toBe(3);
  });
});
