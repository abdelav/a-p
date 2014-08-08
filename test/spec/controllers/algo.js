'use strict';

describe('Controller: AlgoCtrl', function () {

  // load the controller's module
  beforeEach(module('skillFinderApp'));

  var AlgoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlgoCtrl = $controller('AlgoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
