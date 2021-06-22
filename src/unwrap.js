import { replaceNode } from './utilis/replaceNode';

export const unwrap = function (element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  const extraContents = range.extractContents();
  replaceNode(element, extraContents);
  return extraContents;
};
