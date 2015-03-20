'use strict';

describe('Controller: PjCtrl', function () {

  // load the controller's module
  beforeEach(module('gestorApp'));

  var PjCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PjCtrl = $controller('PjCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
