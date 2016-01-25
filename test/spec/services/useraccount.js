'use strict';

describe('Service: userAccount', function () {

  // load the service's module
  beforeEach(module('dwSchemaCompare'));

  // instantiate service
  var userAccount;
  beforeEach(inject(function (_userAccount_) {
    userAccount = _userAccount_;
  }));

  it('should do something', function () {
    expect(!!userAccount).toBe(true);
  });

});
