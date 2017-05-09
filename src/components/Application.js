import React from 'react';

import EditorContainer from '../containers/EditorContainer';
import PreviewContainer from '../containers/PreviewContainer';
import './Application.css';

const Application = () => (
  <main className="Application container">
    <section className="Editor">
      <EditorContainer />
    </section>
    <section className="Preview">
      <PreviewContainer />
    </section>
  </main>
);

export default Application;
