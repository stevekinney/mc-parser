import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/theme/tomorrow_night';

import * as markupActions from '../actions/markup';

const mapStateToProps = ({ markup }) => {
  return { markup };
};

export default connect(mapStateToProps, markupActions)(({ markup, updateMarkup }) => {
  return (
    <AceEditor
      mode="html"
      theme="tomorrow_night"
      tabSize={2}
      onChange={updateMarkup}
      height="100%"
      editorProps={{$blockScrolling: true}}
      value={markup.markup}
    />
  );
});
