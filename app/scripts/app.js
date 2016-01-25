(function () {
  "use strict";

  var app = angular.module("dwSchemaCompare",
    ["common.services", "AdalAngular"])
    .config([
      'httpMethodInterceptorProvider', '$httpProvider', 'adalAuthenticationServiceProvider',
      function (httpMethodInterceptorProvider, $httpProvider, adalProvider) {
        httpMethodInterceptorProvider.whitelistDomain('http://localhost:60534/');
        httpMethodInterceptorProvider.whitelistDomain('http://localhost:44326/');
        httpMethodInterceptorProvider.whitelistDomain('http://localhost:44320/');
        httpMethodInterceptorProvider.whitelistDomain('twitter.com');

        // ...


        // ...
        adalProvider.init(
          {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'smartcaredev.onmicrosoft.com',
            clientId: '1ac6db3c-0867-4575-8859-790c31194d2b',
            extraQueryParameter: 'nux=1'
            //cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
          },
          $httpProvider
        );
      }
    ]);



}());
