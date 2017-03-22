import { DomHandler, Parser } from 'htmlparser2';

const markup = (
`
<div>
  <h1>Hello World</h1>
  <p>Hi there</p>
</div>
`
).trim();

const handler = new DomHandler();
new Parser(handler).end(markup);

const initialState = {
  markup: {
    markup,
    ast: handler.dom
  }
};

export default initialState;
