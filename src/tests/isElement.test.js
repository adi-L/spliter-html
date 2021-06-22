const { isElement } = require("../utilis/isElement");

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return true if DomElement', function () {
      return isElement(document.createElement("div"))
    });
  });
});