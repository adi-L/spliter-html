import { unwrap } from './unwrap';
import { createSelection } from './utilis/createSelection';
import { getAttributes } from './utilis/getAttributes';
import { getCss } from './utilis/getCss';
import { getSelectedElement } from './utilis/getSelectedElement';
import { ischildOf } from './utilis/ischildOf';
import { isElement } from './utilis/isElement';
import {getStyleTags} from './utilis/getStyleTags';
import './utilis/prototype';

export default function spliterHtml(fromElement, toElement, options = {}) {
  const { tag = toElement.nodeName } = options;
  if (fromElement === toElement) {
    return null;
  }
  if (!ischildOf(fromElement, toElement)) {
    return null;
  }
  if (!isElement(fromElement) || !isElement(toElement)) {
    return null;
  }
  const setAttrs = (_fromElement, _toElement) => {
    const styles = getCss(_fromElement, _toElement);
    const attrs = getAttributes(_fromElement, _toElement);
    const template = document.createElement(typeof attrs.href === 'string' ? 'a' : tag);
    for (const style in styles) {
      if (Object.prototype.hasOwnProperty.call(styles, style)) {
        const value = styles[style];
        template.style[style] = value;
      }
    }
    for (const attr in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, attr)) {
        const value = attrs[attr];
        template.setAttribute(attr, value);
      }
    }
    return template;
  };

  createSelection(fromElement);
  const centerElement = getSelectedElement();
  const newCenter = getStyleTags(centerElement, toElement);
  const centerTemplate = setAttrs(centerElement, toElement);
  // center
  centerTemplate.appendChild(newCenter);
  let sel = window.getSelection();
  let range = sel.getRangeAt(0);
  // left
  range.setStart(toElement, 0);
  const leftElement = getSelectedElement();
  const leftTemplate = setAttrs(leftElement, toElement);
  let leftRange = range.extractContents();
  leftTemplate.appendChild(leftRange);
  // right
  range.setEnd(toElement, toElement.childNodes.length);
  const rightElement = getSelectedElement();
  const rightTemplate = setAttrs(rightElement, toElement);
  let rightRange = range.extractContents();
  rightTemplate.appendChild(rightRange);
  const split = {
    left: leftTemplate,
    center: centerTemplate,
    right: rightTemplate
  };
  toElement.innerHTML = '';
  for (const el in split) {
    if (Object.prototype.hasOwnProperty.call(split, el)) {
      const element = split[el];
      toElement.appendChild(element);
    }
  }
  unwrap(toElement);
  return split;

}
