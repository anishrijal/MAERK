'use strict';

(function() {

  function ReportResource($resource) {

    var resource = $resource('/api/report/:id/:controller', {id: '@_id'},
         {
           create: {
             method: 'post'
           },
           update: {
             method: 'post',
             params: {
               id: '@_id'
             }
           },
           getOne: {
             method: 'get',
             params: {
               id: '@_id'
             }
           }
         });
      //
      // var labels =[];
      // var data =[];
      var reports={
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

      //var reports = resource.query();
       return {
           getReport: function(month){
            return reports[month];
           },
           getSkill: function(month){
             var labels=[];
            for(var i=0; i<reports[month].length; i++){
              labels[i] =reports[month][i].skill;
            }
            return labels;
           },
           getSalary: function(month){
             var data =[];
            for(var i=0; i<reports[month].length; i++){
              data[i] =reports[month][i].salary;
            }
            return data;
          },
           getOne:function(id){
             return resource.getOne({},{"_id":id})
           },
           create: function(report){
             new resource(report).$save().then(function (newReport){
               reports.push(newReport);
             })
           },
           update: function(report){

          }

     };
   }
  angular.module('maerkApp')
    .factory('Report', ReportResource);
})();
