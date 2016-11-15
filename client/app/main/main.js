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
      abstract: true,
      url: '/skills',
      templateUrl: 'app/report/report.html',
      controller: 'ReportController',
      controllerAs: 'vm'
    })
    .state('main.client',{
      url: '/client',
      templateUrl: 'app/report/report.html',
      controller: 'ReportSkillController',
      controllerAs: 'vm'
    })
    .state('main.skills.report',{
      url: '',
      views: {
          'table': {
            templateUrl: 'app/report/report.table.html',
            // template: '<emp-table class="flex layout-column"></emp-table>'
            controller: 'ReportSkillController',
            controllerAs: 'vm',
            resolve:{
              data:function(){
                return true
              }
            }
          },
          'chart': {
            templateUrl: 'app/report/report.chart.html'

            // template: '<emp-chart class="flex layout-column"></emp-chart>'
          }
        }
      })
    .state('main.client.report',{
      url: '/client',
      views: {
          'table': {
            templateUrl: 'app/report/report.table.html'
          },
          'chart': {
            templateUrl: 'app/report/report.chart.html'
          }
        }

      });

  });
