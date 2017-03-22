import React from 'react';
import { connect } from 'react-redux';

import { Parser, DomHandler } from 'htmlparser2';
import JSON from 'circular-json';

const mapStateToProps = ({ markup }) => {
  return { markup };
};

export default connect(mapStateToProps)(({ markup }) => {
  const handler = new DomHandler();
  const parser = new Parser(handler).end(markup);

  return (
    <pre style={ { height: '100vh', fontFamily: 'monospace', overflow: 'scroll' } }>
      { JSON.stringify(handler.dom, null, 2) }
    </pre>
  );
});
