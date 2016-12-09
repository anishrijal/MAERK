'use strict';

(function() {

  function ReportResource($resource, Employee) {

    var resource = $resource('/api/report/:id/:controller', {id: '@_id', year: 'year'},
         {
           create: {
             method: 'post'
           },
           update: {
             method: 'post',
             params: {
               id: '@_id',
               year: 'year'
             }
           },
           getOne: {
             method: 'get',
             params: {
               id: '@_id'
             }
           }
         });

      var report={
        year:2015,
        january:[{
          first_name: "Kathryn",
          last_name: "Ramos",
          client: "Tmobile",
          skill: "JavaScript",
          recruiter: "Bobby",
          salary: 91679,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Anish",
          last_name: "Rijal ",
          client: "Verison",
          skill: "Css",
          recruiter: "Bobby",
          salary: 25000,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Kanye",
          last_name: "West",
          client: "At&t",
          skill: "HTML",
          recruiter: "Bobby",
          salary: 70090,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Donald",
          last_name: "Trump",
          client: "At&t",
          skill: "Node",
          recruiter: "Bobby",
          salary: 11090,
          pay_vacation_cost: 6361
          }
      ],
        february:[{
          first_name: "Anish",
          last_name: "Rijal",
          client: "At&t",
          skill: "Csharp",
          recruiter: "Bobby",
          salary: 70000,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Donovan",
          last_name: "Perry",
          client: "Verison",
          skill: "Java",
          recruiter: "Bobby",
          salary: 91890,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Doan",
          last_name: "Per",
          client: "Tmobile",
          skill: "JavaScript",
          recruiter: "Bobby",
          salary: 91890,
          pay_vacation_cost: 6361
          }]
      };
      var yearId;
      var reports = resource.query();

       return {
           getReportMonth: function(year, month){

            return resource.getOne({year:year, month:month}).$promise
            // return resource.getOne({year:year, month:month})

           },
           getReport: function(month){
            return report[month];
           },
           getReportYear: function(year, month){
            console.log(year, month);
            console.log(reports.length);
          },
           getSkill: function(month){
             var labels=[];

             for(var i=0; i<report[month].length; i++){
                  labels[i] =report[month][i].skill;
                }
            return labels;
           },
           getSalary: function(month){
             var data =[];
             for(var i=0; i<report[month].length; i++){
                  data[i] =report[month][i].salary;
                }
            return data;
            },
           create: function(report){
             new resource(report).$save().then(function (newReport){
               reports.push(newReport);
             })
           },
           update: function(report){
               resource.update({_id:report._id},report).$promise.then(function(newReport){
                 for (var i = 0; i < reports.length; i++) {
                      if (reports[i]._id == newReport._id) {
                        reports[i] = newReport;
                      }
                  }
                })
           }
     };

   }
  angular.module('maerkApp')
    .factory('Report', ReportResource);
})();
