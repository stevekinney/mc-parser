import React from 'react';
import { connect } from 'react-redux';

import * as markupActions from '../actions/markup';

import JSON from 'circular-json';

const mapStateToProps = ({ markup }) => {
  return { markup };
};

export default connect(mapStateToProps, markupActions)(({ markup, updateAst }) => {
  return (
    <textarea style={ { height: '100vh', fontFamily: 'monospace', overflow: 'scroll' } } value={ JSON.stringify(markup.ast, null, 2) } onKeyUp={(event) => updateAst(event.target.value)} />
  );
});
