(function () {
    'use strict';
    angular.module('maerkApp')
        .controller('addController', function (Employee, $mdDialog) {

      this.editEmp = false;
      this.addEmp= true;

      this.newEmp ={};
      this.newEmp.client=[];
      this.newEmp.skill =[];
      this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
        return {
          types: workType
        };
      })

      this.addEmployee = Employee.create;

      this.cancel = function() {
            $mdDialog.cancel();
          };


    });
    
  })();
