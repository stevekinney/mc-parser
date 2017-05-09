import renameProperty from './rename-property';
import formatStyle from './format-style';

const renameClassToClassName = renameProperty('class', 'className');
const turnStylesIntoObject = (attribs) => {
  if (!attribs.style) return attribs;
  return ({ ...attribs, style: formatStyle(attribs.style) });
};

const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

const fixAttirbutes = compose(renameClassToClassName, turnStylesIntoObject);

export default fixAttirbutes;
