let expect = require('chai').expect;
import {isElement} from '../src/utilis/isElement';
require('jsdom-global')();

describe('isElement test', function () {
  it('is dom element', function () {
    let div = document.createElement('div');
    expect(isElement(div)).eql(true);
  });

});
