'use strict';

describe('Directive: common.directives', function () {

  // load the directive's module
  beforeEach(module('dwSchemaCompare'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<common.directives></common.directives>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the common.directives directive');
  }));
});
