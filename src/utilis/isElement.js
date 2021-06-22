export function isElement(obj) {
  try {
    return obj instanceof HTMLElement;
  } catch (e) {
    return typeof obj === 'object' &&
        obj.nodeType === 1 && typeof obj.style === 'object' &&
        typeof obj.ownerDocument === 'object';
  }
}
