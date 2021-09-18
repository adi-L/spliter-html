export const wrap = function (wrapper) {
  if (!this.parentNode) {return false;}
  this.parentNode.insertBefore(wrapper, this);
  wrapper.appendChild(this);
  return wrapper;
};
Element.prototype.__wrap = wrap;
