import html from 'htmlparser-to-html';
import parse from '../lib/html-parser';

export const updateMarkup = markup => ({
  type: 'UPDATE_MARKUP',
  ast: parse(markup),
  markup,
});

export const updateAst = ast => ({
  type: 'UPDATE_MARKUP',
  ast,
  markup: html(JSON.parse(ast)),
});
