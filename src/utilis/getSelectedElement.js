export const getSelectedElement = function () {
  let e = document.getSelection();
  if (e !== null) {
    let t = e.anchorNode;
    if (t !== null) {
      for (; t.nodeType === 3;) {t = t.parentNode;} return t;
    } return null;
  }
};
