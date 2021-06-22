import { getStyle } from './getStyle';
import { ischildOf } from './ischildOf';

export function getCss(fromElement, toElement) {
  let intailStyle = {};
  let currectElement = fromElement;

  while (currectElement && ischildOf(currectElement, toElement.parentElement)) {
    let map = getStyle(currectElement);
    for (const style in map) {
      if (Object.prototype.hasOwnProperty.call(map, style)) {
        const value = map[style];
        // text-decoration  could be twice like underline and strike therough..
        if (!intailStyle[style]) {intailStyle[style] = value;}
      }
    }
    currectElement = currectElement.parentElement;
  }
  return intailStyle;
}
