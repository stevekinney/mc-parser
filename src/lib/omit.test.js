import omit from './omit';

describe('omit', () => {
  it('should remove the old property to the object', () => {
    const result = omit('old')({ old: true });
    expect(result.old).toBeUndefined();
  });

  it('keeps properties that are not involved', () => {
    const result = omit('old')({ old: true, notMentioned: true });
    expect(result.notMentioned).toBe(true);
  });
});
