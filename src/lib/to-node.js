/* eslint no-use-before-define: 0, jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';
import fixAttirbutes from './fix-attributes';

let count = 0;

const handleClick = (event, node) => {
  if (node.type === 'tag') event.stopPropagation();
  console.log(node);
  return false;
};

export const createTagNode = (node) => {
  const { attribs, children, name } = node;

  return React.createElement(
    name,
    Object.assign(
      {},
      {
        className: 'node-tag',
        children: children.map(toNode),
        key: count++,
        onClick(event) {
          handleClick(event, node);
        },
      },
      fixAttirbutes(attribs),
    ),
  );
};

export const createTextNode = node => (
  <span className="node-text" onClick={event => handleClick(event, node)}>{node.data}</span>
);

const toNode = node => {
  if (node.type === 'tag') return createTagNode(node);
  if (node.type === 'text') return createTextNode(node);
};

export default toNode;
