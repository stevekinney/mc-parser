import React from 'react';
import { connect } from 'react-redux';

import Editor from '../components/Editor';

import * as markupActions from '../actions/html';
import * as editorActions from '../actions/editor';

const mapStateToProps = ({ html, editor }) => ({ html, editor });
const actions = { ...markupActions, ...editorActions };

export default connect(mapStateToProps, actions)(props => (
  <Editor {...props} />
));
