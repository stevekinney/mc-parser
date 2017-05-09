import fixAttributes from './fix-attributes';

describe('fixAttributes', () => {
  it('should rename all "class" attribures to "className"', () => {
    const result = fixAttributes({ class: true });
    expect(result.className).toBe(true);
  });
});
