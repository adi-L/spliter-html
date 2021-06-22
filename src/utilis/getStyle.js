export function getStyle(el) {
  if (!el || !el.style) {return {};}
  let styles = {};
  let style = el.getAttribute('style');
  if (style) {
    let collectStyles = style.split(';');
    if (Array.isArray(collectStyles)) {
      collectStyles.forEach(_style => {
        const keyValue = _style.split(':');
        if (keyValue[1] && keyValue[0]) {styles[keyValue[0].trim()] = keyValue[1].trim();}
      });
    }
  }
  return styles;
}
