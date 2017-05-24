import { Parser, DomHandler } from 'htmlparser2';

/*

So, what's going on here? Supiciously, not much. (Despite what it might look like.)

1. We're subclassing DomHandler to add a few extra options like including the
   starting and ending indices of each node in the original HTML markup.
2. We're abstracting some of the more tedious parts of setting up a parser with
   the parse() method.
3. Annotate the nodes with their start and end indices.

*/

let count = 0;

const defaultOptions = {
  lowerCaseTags: true,
  lowerCaseAttributeNames: true,
  recognizeSelfClosing: true,
};

class Handler extends DomHandler {
  constructor(includeDataAttributes = true) {
    super({
      withStartIndices: true,
      withEndIndices: true,
    });
    this.includeDataAttributes = includeDataAttributes;
  }

  _setEnd(elem) {
    elem.endIndex = this._parser.endIndex + 1;
  }

  onprocessinginstruction(name, data) {
    this._parser.endIndex = this._parser._tokenizer._index;
    super.onprocessinginstruction(name, data);
  }

  _addDomElement(elem) {
    elem.key = count++;
    super._addDomElement(elem);
    this._setEnd(elem);

    if (!elem.attribs) elem.attribs = {};

    if (this.includeDataAttributes) {
      elem.attribs['data-start-index'] = elem.startIndex;
      elem.attribs['data-end-index'] = elem.endIndex;
      elem.attribs['data-node-id'] = elem.key;
      elem.attribs.contenteditable = true;
    } else {
      delete elem.attribs['data-start-index'];
      delete elem.attribs['data-end-index'];
      delete elem.attribs['data-node-id'];
      delete elem.attribs.contenteditable;
    }
  }
}

const parse = (code, options = {}) => {
  const handler = new Handler(options.includeDataAttributes);
  new Parser(handler, { ...defaultOptions, ...options }).end(code);
  return handler.dom;
};

export default parse;
export { Handler };
