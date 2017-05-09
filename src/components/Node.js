/* eslint
  no-use-before-define: 0,
  jsx-a11y/no-static-element-interactions: 0,
  react/prop-types: 0
*/
import React from 'react';
import store from '../store';
import fixAttirbutes from '../lib/fix-attributes';
import indexToRowAndColumn from '../lib/index-to-row-and-column';
import range from '../lib/range';
import { setSelection } from '../actions/editor';

const handleClick = (event, node, markup) => {
  event.stopPropagation();
  const start = indexToRowAndColumn(markup, node.startIndex);
  const end = indexToRowAndColumn(markup, node.endIndex);
  store.dispatch(setSelection(range(start, end)));
};

const Node = ({ node, markup }) => {
  const { attribs, children, key, name, type } = node;
  if (type === 'tag') {
    const attributes = fixAttirbutes(attribs);
    return React.createElement(
      name,
      {
        className: 'node-tag',
        key,
        onClick(event) {
          handleClick(event, node, markup);
        },
        ...attributes,
      },
      ...children.map(n => <Node node={n} markup={markup} />),
    );
  }
  return (
    <span
      className="node-text"
      onClick={event => handleClick(event, node, markup)}
      key={key}
    >
      {node.data}
    </span>
  );
};

export default Node;
