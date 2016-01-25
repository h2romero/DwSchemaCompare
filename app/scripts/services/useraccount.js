(function () {
  'use strict';

  angular
    .module('common.services')
    .factory('userAccount', userAccount);

  userAccount.$inject = ['$resource', 'appSettings'];

  function userAccount($resource, appSettings) {
    return {
      registration: $resource(appSettings.serverPath + "api/Schema",
        null, {
          'registerUser': { method: 'POST' }
        }),
      login: $resource(appSettings.serverPath + "Token",
        null, {
          'loginUser': {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            transformRequest: function (data, headersGetter) {
              var str = [];
              for (var d in data)
                str.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
              return str.join("&");
            }
          }
        })

    };
  }

})();
