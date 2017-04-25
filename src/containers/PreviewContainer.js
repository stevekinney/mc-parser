import React from 'react';
import { connect } from 'react-redux';

import * as markupActions from '../actions/markup';

const mapStateToProps = ({ markup }) => ({ markup });

export default connect(mapStateToProps, markupActions)(({ markup, updateAst }) => {
  const { ast } = markup;
  return (
    <ul>
      {ast.map((node, index) => <li key={index}>{node.name}</li>)}
    </ul>
  );
});
