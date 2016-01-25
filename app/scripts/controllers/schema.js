(function () {
  "use strict";

  angular.module("dwSchemaCompare")
    .controller("SchemaCtrl",
    ["schemaResource", SchemaCtrl]);


  function SchemaCtrl(schemaResource) {
    var vm = this;
    vm.scriptEditDisabled = true;
    vm.editName = "Edit";
    vm.loading = false;
    vm.resultTextAlert = "";
    vm.showResultAlert = false;
    vm.resultStatus = "";

    vm.populate = function () {
      vm.loading = true;
      schemaResource.query(function(data) {
        vm.script = data[0].script;
        vm.loading = false;
      });
    };

    vm.populate();

    vm.switchBool = function(value) {
      vm[value] = !vm[value];
    };

    vm.save = function () {
      schemaResource.save(JSON.stringify(vm.script.toString().replace(/<br\s*[\/]?>/gi, '\r\n')), function(data) {
          vm.resultTextAlert = "Command(s) completed successfully";
          vm.showResultAlert = true;
          vm.result = "alert alert-success";
          vm.resultStatus = "Done!";
        },
        function(error) {
          vm.resultTextAlert = error.data;
          vm.showResultAlert = true;
          vm.result = "alert alert-error";
          vm.resultStatus = "Error.";
        });
    }

    vm.toggleEdit = function () {
      vm.scriptEditDisabled = !vm.scriptEditDisabled;
      vm.editName = vm.scriptEditDisabled ? "Edit" : "Done ";
    }
  }


}());
