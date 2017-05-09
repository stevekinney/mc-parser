import renameProperty from './rename-property';

describe('renameProperty', () => {
  it('should add the new property to the object', () => {
    const result = renameProperty('old', 'new')({ old: true });
    expect(result.new).toBe(true);
  });

  it('should remove the old property to the object', () => {
    const result = renameProperty('old', 'new')({ old: true });
    expect(result.old).toBeUndefined();
  });

  it('keeps properties that are not involved', () => {
    const result = renameProperty('old', 'new')({ old: true, notMentioned: true });
    expect(result.notMentioned).toBe(true);
  });
});
