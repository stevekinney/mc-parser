import renameProperty from './rename-property';

const renameClassToClassName = renameProperty('class', 'className');

const fixAttirbutes = attribs => (
  renameClassToClassName(attribs)
);

export default fixAttirbutes;
