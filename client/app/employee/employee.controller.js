(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('EmployeeController', function (Employee) {

          this.employeeList = Employee.query();

        });
    })();
