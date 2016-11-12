'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {

    $stateProvider.state('main', {
      url: '/',
      template: '<main class="flex layout-column"></main>',
      authenticate: 'true'
    })
    .state('main.employee',{
      url: '/employee',
      templateUrl: 'app/employee/employee.html',
      controller: 'EmployeeController',
      controllerAs: 'vm'
    })
    .state('main.skills',{
      url: '/skills',
      templateUrl: 'app/report/report.html',
      controller: 'ReportController',
      controllerAs: 'vm'
    });
  });
