import formatStyle from './format-style';

describe('formatStyle', () => {
  it('should format a single style string to an object', () => {
    const result = formatStyle('width: 200px');
    expect(result).toEqual({ width: '200px' });
  });

  it('should format a multiple style string to an object', () => {
    const result = formatStyle('width: 200px; height: 200px');
    expect(result).toEqual({ width: '200px', height: '200px' });
  });

  it('should format a ignore trailing semi-colons', () => {
    const result = formatStyle('width: 200px;');
    expect(result).toEqual({ width: '200px' });
  });

  it('should format a kebab-case properties to camel-case', () => {
    const result = formatStyle('border-radius: 10px');
    expect(result).toEqual({ borderRadius: '10px' });
  });
});
