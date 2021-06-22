let assert = require('chai').assert;
require('jsdom-global')();
import { ischildOf } from '../src/utilis/ischildOf';

describe('isChildOf test', function () {
  it('should return true if there is child and parent', function () {
    let parent = document.createElement('div');
    let child = document.createElement('p');
    parent.appendChild(child);
    assert(ischildOf(child, parent));
  });

});
