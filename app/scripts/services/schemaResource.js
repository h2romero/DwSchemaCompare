/**
 * Created by hectorromero on 1/21/16.
 */
(function () {
  'use strict';

  angular
    .module('dwSchemaCompare')


    .factory('schemaResource', schemaResource);
  schemaResource.$inject = ['$resource', 'appSettings'];

  function schemaResource($resource, appSettings) {
    return $resource(appSettings.serverPath + "api/Schema/Compare");
  }
})();
