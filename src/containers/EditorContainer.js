import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line
import brace from 'brace';
// eslint-disable-next-line
import AceEditor from 'react-ace';

import 'brace/mode/html';
import 'brace/theme/tomorrow_night';

import * as markupActions from '../actions/html';

const mapStateToProps = ({ html }) => ({ html });

export default connect(mapStateToProps, markupActions)(({ html, updateMarkup }) => (
  <AceEditor
    mode="html"
    theme="tomorrow_night"
    tabSize={2}
    onChange={updateMarkup}
    height="100%"
    editorProps={{ $blockScrolling: true }}
    value={html.markup}
  />
  ));
