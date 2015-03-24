'use strict';

describe('Directive: menuEmpresas', function () {

  // load the directive's module and view
  beforeEach(module('gestorApp'));
  beforeEach(module('app/menuEmpresas/menuEmpresas.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<menu-empresas></menu-empresas>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the menuEmpresas directive');
  }));
});