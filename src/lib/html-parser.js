import { Parser, DomHandler } from 'htmlparser2';

/*

So, what's going on here? Supiciously, not much. (Despite what it might look like.)

1. We're subclassing DomHandler to add a few extra options like including the
   starting and ending indices of each node in the original HTML markup.
2. We're abstracting some of the more tedious parts of setting up a parser with
   the parse() method.
3. We're coming up with an arbitrary key to get React off our backs. This should be changed.

*/

let count = 0;

const defaultOptions = {
  lowerCaseTags: true,
  lowerCaseAttributeNames: true,
  recognizeSelfClosing: true,
};

class Handler extends DomHandler {
  constructor() {
    super({
      withStartIndices: true,
      withEndIndices: true,
    });
  }

  _addDomElement(elem) {
    elem.key = count++;
    super._addDomElement(elem);
  }
}

const parse = (code, options) => {
  const handler = new Handler();
  new Parser(handler, { ...defaultOptions, ...options }).end(code);
  return handler.dom;
};

export default parse;
export { Handler };
