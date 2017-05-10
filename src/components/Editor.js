/* eslint react/prop-types: 0 */

import React, { Component } from 'react';

import brace from 'brace'; // eslint-disable-line
import AceEditor from 'react-ace'; // eslint-disable-line

import 'brace/mode/html';
import 'brace/theme/tomorrow_night';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.updateCursorPosition = this.updateCursorPosition.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  componentDidMount() {
    this.ace.editor.selection.on('changeCursor', () => {
      const cursorPosition = this.ace.editor.selection.getRange();
      this.props.updateCursorPosition(cursorPosition);
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.editor.isSelecting) {
      this.updateSelection(newProps);
    }
  }

  updateCursorPosition(cursorPosition) {
    this.ace.editor.selection.setSelectionRange(cursorPosition);
  }

  updateSelection({ editor, releaseSelection }) {
    this.ace.editor.selection.setSelectionRange(editor.cursorPosition);
    this.ace.editor.focus();
    releaseSelection();
  }

  render() {
    const { html, updateMarkup } = this.props;

    return (
      <AceEditor
        mode="html"
        theme="tomorrow_night"
        tabSize={2}
        onChange={updateMarkup}
        height="100%"
        editorProps={{ $blockScrolling: Infinity }}
        value={html.markup}
        ref={(ace) => {
          this.ace = ace;
        }}
      />
    );
  }
}
