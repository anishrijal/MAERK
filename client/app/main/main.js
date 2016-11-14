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
      controller: 'ReportSkillController',
      controllerAs: 'vm'
    })
    .state('main.skills.detail',{
      view: {
        'chart': {
          templateUrl: 'app/report/report.chart.html'
        },
        'table': {
          templateUrl: 'app/report/report.table.html'
        }
      }
    })
    // .state('main.skills.chart',{
    // })
      // children: [
      //   {
      //     name: 'table',
      //     templateUrl: 'app/report/report.table.html',
      //   },
      //   {
      //     name: 'chart',
      //     templateUrl: 'app/report/report.chart.html',
      //   }]
    // })
    .state('main.client',{
      url: '/client',
      templateUrl: 'app/report/report.html',
      controller: 'ReportClientController',
      controllerAs: 'vm'
    })
    .state('main.client.table',{
      templateUrl: 'app/report/report.table.html',
    })
    .state('main.client.chart',{
      templateUrl: 'app/report/report.chart.html',
    })
    //   children: [
    //     {
    //       name: 'table',
    //       templateUrl: 'app/report/report.table.html',
    //     },
    //     {
    //       name: 'chart',
    //       templateUrl: 'app/report/report.chart.html',
    //     }]
    // })

  });
