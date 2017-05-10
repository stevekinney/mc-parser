import renameProperty from './rename-property';
import formatStyle from './format-style';
import compose from './compose';

const turnStylesIntoObject = (attribs) => {
  if (!attribs.style) return attribs;
  return { ...attribs, style: formatStyle(attribs.style) };
};

const renameClassToClassName = renameProperty('class', 'className');
const camelizeCellSpacing = renameProperty('cellspacing', 'cellSpacing');
const camelizeCellPadding = renameProperty('cellpadding', 'cellPadding');

const fixAttirbutes = compose(
  renameClassToClassName,
  camelizeCellSpacing,
  camelizeCellPadding,
  turnStylesIntoObject,
);

export default fixAttirbutes;
