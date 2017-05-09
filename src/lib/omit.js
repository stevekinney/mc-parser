const omit = targetProperty => object => (
  Object.entries(object).reduce((result, [prop, value]) => {
    if (prop !== targetProperty) return Object.assign({}, result, { [prop]: value });
    return result;
  }, {})
);

export default omit;
