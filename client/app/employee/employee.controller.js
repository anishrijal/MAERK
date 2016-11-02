(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('EmployeeController', function (Employee) {

          this.employeeList = Employee.query();
          // this.employeeList.$promise.then(()=>{
          //   console.log(Employee.getOne(this.employeeList[0]._id));
          // });
        });
    })();
