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
    this.ace.editor.selection.on('changeCursor', this.updateCursorPosition);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.editor.isSelecting) {
      this.updateSelection(newProps);
    }
  }

  componentWillUnmount() {
    this.ace.editor.selection.off('changeCursor', this.updateCursorPosition);
  }

  updateCursorPosition() {
    if (!this.ace) return;
    const cursorPosition = this.ace.editor.selection.getRange();
    this.ace.editor.selection.setSelectionRange(cursorPosition);
  }

  updateSelection({ editor, releaseSelection }) {
    if (!this.ace) return;
    this.ace.editor.selection.setSelectionRange(editor.cursorPosition);
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
