import range from './range';

const start = [1, 2];
const end = [3, 4];

const result = range(start, end);

describe('Range', () => {
  it('should have the correct start row', () => {
    expect(result.start.row).toBe(1);
  });

  it('should have the correct start row', () => {
    expect(result.start.column).toBe(2);
  });

  it('should have the correct start row', () => {
    expect(result.end.row).toBe(3);
  });

  it('should have the correct start row', () => {
    expect(result.end.column).toBe(4);
  });
});
