import removeInvalidAttributes from './remove-invalid-attributes';

describe('removeInvalidAttributes', () => {
  it('should retain valid attributes', () => {
    const attribs = { id: 'test' };
    const result = removeInvalidAttributes({ ...attribs });
    expect(result).toEqual({ ...attribs });
  });

  xit('should retain valid attributes', () => {
    const attribs = { id: 'test', totallyInvalid: true };
    const result = removeInvalidAttributes({ ...attribs });
    expect(result).toEqual({ id: 'test' });
  });
});
