'use strict';

describe('Controller: MatesCtrl', function () {

  // load the controller's module
  beforeEach(module('skillFinderApp'));

  var MatesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatesCtrl = $controller('MatesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
