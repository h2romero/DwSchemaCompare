(function () {
  "use strict";
  angular.module("common.services", ["ngResource", "ngRoute", "ng.httpLoader"])
    .constant("appSettings",
    {
      //serverPath: "https://localhost:44300/"
      //serverPath: "http://dwschemacomparewebapi.azurewebsites.net/"
      //serverPath: "http://localhost:60534/" // Test AMP.WebAPI
      //serverPath: "http://localhost:44320/"   // Test WebApp-OpenIDConnect-DotNet
      //serverPath: "https://localhost:44326/"   // Test TodoSPA
      //serverPath: "http://localhost:59484/"   // Test DW_SchemaCompare.WebAPI
      serverPath: "http://dwschemacomparewebapi9354.azurewebsites.net/"
    })
    .config([
      '$routeProvider', function($routeProvider) {

        $routeProvider.when("/home", {
          controller: "MainCtrl",
          templateUrl: "/views/main.html"
        }).when("/schema", {
          controller: "SchemaCtrl",
          controllerAs: "vm",
          templateUrl: "/views/schema.html",
          requireADLogin: true
        }).otherwise({ redirectTo: "/home" });
      }]);
}());
