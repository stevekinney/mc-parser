import parse from './html-parser';

describe('parse', () => {
  const markup = '<h1>Hello World</h1>';

  it('should return an array', () => {
    const ast = parse(markup);
    expect(Array.isArray(ast)).toBe(true);
  });

  it('should have a first element that represents an <h1>', () => {
    const [node] = parse(markup);
    expect(node.type).toBe('tag');
    expect(node.name).toBe('h1');
  });

  it('should have a starting index of 0', () => {
    const [node] = parse(markup);
    expect(node.startIndex).toBe(0);
  });

  it('should work with self-closing tags', () => {
    const img = '<img src="http://placekitten.com/200/300">';
    const [node] = parse(img);
    expect(node.name).toBe('img');
  });
});
