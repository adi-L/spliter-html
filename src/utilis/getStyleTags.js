import { ischildOf } from './ischildOf';
import {inline_elemets_arr} from '../enums/INLINE_ELEMENTS';

export function getStyleTags(fromElement, toElement) {
  let lastElement = fromElement;
  let currectElement = fromElement.parentElement;
  
  while (currectElement && ischildOf(currectElement, toElement.parentElement)) {
    if (inline_elemets_arr.includes(currectElement.nodeName)) {
      const warpTag = document.createElement(currectElement.nodeName);
      lastElement.__wrap(warpTag);
      lastElement = warpTag;
    }
    currectElement = currectElement.parentElement;
  }
  return lastElement;
}
