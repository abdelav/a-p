'use strict';

describe('Service: FIREBURL', function () {

  // load the service's module
  beforeEach(module('skillFinderApp'));

  // instantiate service
  var FIREBURL;
  beforeEach(inject(function (_FIREBURL_) {
    FIREBURL = _FIREBURL_;
  }));

  it('should do something', function () {
    expect(!!FIREBURL).toBe(true);
  });

});
