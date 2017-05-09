import { shallow } from 'enzyme';
import { createTagNode, createTextNode } from './to-node';

const tagNode = {
  type: 'div',
  children: [],
  attribs: {},
};

const textNode = {
  data: 'Hello',
};
