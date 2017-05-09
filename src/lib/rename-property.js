import omit from './omit';

const renameProperty = (old, updated) => (object) => {
  const removeOldProperty = omit(old);
  return Object.assign({}, removeOldProperty(object), { [updated]: object[old] });
};

export default renameProperty;
