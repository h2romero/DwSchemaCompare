'use strict';

describe('Controller: SchemaCtrl', function () {

  // load the controller's module
  beforeEach(module('dwSchemaCompare'));

  var SchemaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SchemaCtrl = $controller('SchemaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SchemaCtrl.awesomeThings.length).toBe(3);
  });
});
