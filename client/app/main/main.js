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
    .state('main.register',{
      url: '/register',
      templateUrl: 'app/report/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'vm'
    })
    .state('main.skills',{
      url: '/skills',
      templateUrl: 'app/report/report.html',
      controller: 'ReportSkillController',
      controllerAs: 'vm'
    })
    .state('main.client',{
      url: '/client',
      templateUrl: 'app/report/report.html',
      controller: 'ReportClientController',
      controllerAs: 'vm'
    });

  });
