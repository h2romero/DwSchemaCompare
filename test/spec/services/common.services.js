'use strict';

describe('Service: common.services', function () {

  // load the service's module
  beforeEach(module('dwSchemaCompare'));

  // instantiate service
  var common.services;
  beforeEach(inject(function (_common.services_) {
    common.services = _common.services_;
  }));

  it('should do something', function () {
    expect(!!common.services).toBe(true);
  });

});
