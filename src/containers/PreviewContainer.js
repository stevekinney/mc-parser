import React from 'react';
import { connect } from 'react-redux';

import Node from '../components/Node';
import * as markupActions from '../actions/html';

const mapStateToProps = ({ html }) => ({ html });

export default connect(mapStateToProps, markupActions)(({ html }) => {
  const { ast, markup } = html;
  return <div className="Preview">{ast.map(node => <Node node={node} markup={markup} key={node.key} />)}</div>;
});
