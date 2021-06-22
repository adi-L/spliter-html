export const replaceNode = function (nodeToReplace, replacementNode) {
  if (nodeToReplace.parentNode) {
    nodeToReplace.parentNode.insertBefore(replacementNode, nodeToReplace);
    nodeToReplace.remove();
    return replacementNode;
  }
};
