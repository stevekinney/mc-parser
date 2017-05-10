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

import './Node.css';

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
        key,
        onClick(event) {
          handleClick(event, node, markup);
        },
        ...attributes,
        className: `Node node-tag ${attributes.className}`,
      },
      ...children.map(n => <Node node={n} markup={markup} />),
    );
  }

  /*
    Right now, we're naively assuming that a node is either a tag or a text node.
    It could totally be a comment, but we don't need to render those anyway at this
    point in time. So, if it's not a tag, then it's a text node, right? Let's not,
    however waste you time rendering text nodes that are empty. This could (and does)
    include new lines between tags. No need. Also: it makes React sad. So, we will
    only render a text node if there is data.
  */

  if (node.data && !!node.data.trim()) {
    return (
      <span
        className="Node node-text"
        onClick={event => handleClick(event, node, markup)}
        key={key}
      >
        {node.data}
      </span>
    );
  }

  // If it's neither a tag node or a text node with data. Return null for now.
  return null;
};

export default Node;
