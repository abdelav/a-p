'use strict';

describe('Directive: randomW', function () {

  // load the directive's module
  beforeEach(module('skillFinderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<random-w></random-w>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the randomW directive');
  }));
});
