import { DomHandler, Parser } from 'htmlparser2';
import html from 'htmlparser-to-html';

export const updateMarkup = (markup) => {
  const handler = new DomHandler();
  new Parser(handler).end(markup);

  return {
    type: 'UPDATE_MARKUP',
    ast: handler.dom,
    markup,
  };
};

export const updateAst = ast => ({
  type: 'UPDATE_MARKUP',
  ast,
  markup: html(JSON.parse(ast)),
});
