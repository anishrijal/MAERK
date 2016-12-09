(function () {
    'use strict';
    angular.module('maerkApp')
        .controller('addController', function (Employee, $mdDialog) {
          var payRollTaxes = 1.15;

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
      this.newEmp.vacation = ((this.newEmp.salary * payRollTaxes) / 1700) * 80;
      console.log(this.newEmp.salary);
      this.newEmp.Ksquare_hourly_cost= ((this.newEmp.salary * payRollTaxes) + this.newEmp.insurance + this.newEmp.immigration
                                          + this.newEmp.vacation + this.newEmp.relocation) / 1800;
      this.cancel = function() {
            $mdDialog.cancel();
          };


    });

  })();
