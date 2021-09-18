import { ischildOf } from './ischildOf';

export function getAttributes(fromElement, toElement) {
  const nonValidTags = ['IMG', 'A', 'BR', 'HR', 'INPUT', 'AUDIO', 'VIDEO', 'PICTURE'];
  let attributes = {};
  let currectElement = fromElement;
  while (currectElement && ischildOf(currectElement, toElement.parentElement)) {
    let attrs = currectElement.attributes;
    for (let i = attrs.length - 1; i >= 0; i--) {
      if (attrs[i].name !== 'style' && !nonValidTags.includes(currectElement.nodeName)) {
        if (!attributes[attrs[i].name]) {
          attributes[attrs[i].name] = attrs[i].value;
        }
      }
    }
    currectElement = currectElement.parentElement;
  }
  return attributes;
}
