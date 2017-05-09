import { camelize } from 'underscore.string';

const formatStyle = (styleString) => {
  const declarations = styleString.split(';');
  return declarations.map((decl) => {
    const [property, value] = decl.split(':').map(d => d.trim());
    return { [camelize(property)]: value };
  }).reduce((decls, decl) => ({ ...decls, ...decl }), {});
};

export default formatStyle;
