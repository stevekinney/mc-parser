/* eslint jsx-a11y/no-static-element-interactions: 0, react/no-danger: 0 */
import React from 'react';
import { connect } from 'react-redux';
import toHtml from 'htmlparser-to-html';

import range from '../lib/range';
import parse from '../lib/html-parser';
import indexToRowAndColumn from '../lib/index-to-row-and-column';

import * as markupActions from '../actions/html';
import * as editorActions from '../actions/editor';

const mapStateToProps = ({ html }) => ({ html });
const actions = { ...markupActions, ...editorActions };

export default connect(mapStateToProps, actions)(({
  html,
  setSelection,
  updateMarkup,
}) => {
  const { ast, markup } = html;
  const handleClick = (event) => {
    if (event.target.classList.contains('Preview')) return;
    const { startIndex, endIndex } = event.target.dataset; // eslint-disable-line
    const start = indexToRowAndColumn(markup, +startIndex);
    const end = indexToRowAndColumn(markup, +endIndex);
    setSelection(range(start, end));
  };
  const handleChange = (event) => {
    event.stopPropagation();
    updateMarkup(toHtml(parse(event.target.parentElement.innerHTML, {
      includeDataAttributes: false,
    })));
    return false;
  };
  return (
    <div
      className="Preview"
      onClick={handleClick}
      onKeyUp={handleChange}
      dangerouslySetInnerHTML={{ __html: toHtml(ast) }}
    />
  );
});
