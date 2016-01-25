(function () {
  'use strict';

  angular
    .module('dwSchemaCompare')
    .directive('elastic', [
      '$timeout',
      function($timeout) {
        return {
          restrict: 'A',
          link: function($scope, element) {
            $scope.initialHeight = $scope.initialHeight || element[0].style.height;
            var resize = function() {
              element[0].style.height = $scope.initialHeight;
              element[0].style.height = "" + element[0].scrollHeight + "px";
            };
            element.on("input change", resize);
            $timeout(resize, 0);
          }
        };
      }
    ])
    .directive('ngConfirmClick', [
      function() {
        return {
          link: function(scope, element, attr) {
            var msg = attr.ngConfirmClick || "Are you sure?";
            var clickAction = attr.confirmedClick;
            element.bind('click', function(event) {
              if (window.confirm(msg)) {
                scope.$eval(clickAction)
              }
            });
          }
        };
      }
    ]);

})();
