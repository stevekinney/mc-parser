import React from 'react';
import { connect } from 'react-redux';

import toNode from '../lib/to-node';
import * as markupActions from '../actions/html';

const mapStateToProps = ({ html }) => ({ html });

export default connect(mapStateToProps, markupActions)(({ html }) => {
  const { ast } = html;
  return <div className="Preview">{ast.map(toNode)}</div>;
});
