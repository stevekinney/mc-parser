import parse from './lib/html-parser';

const markup = `
<div>
  <h1>Hello World</h1>
  <p>Hi there</p>
</div>`.trim();

const initialState = {
  html: {
    markup,
    ast: parse(markup),
  },
  editor: {
    isSelecting: true,
    cursorPosition: {
      start: {
        row: null,
        column: null,
      },
      end: {
        row: null,
        column: null,
      },
    },
  },
};

export default initialState;
