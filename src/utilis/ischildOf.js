export function ischildOf(child, parent) {
  if (!parent) {return false;}
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

