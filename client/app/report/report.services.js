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


      var reports={
        year:2015,
        january:[{

            first_name: "Kathryn",
            last_name: "Ramos",
            skill: "Screening",
            recruiter: "Bobby",
            salary: 91679,
            pay_vacation_cost: 6361
            },
            {
            first_name: "Anish",
            last_name: "Rijal ",
            skill: "Nothing",
            recruiter: "Bobby",
            salary: 70000,
            pay_vacation_cost: 6361
          }
        ],
        february:[{
          first_name: "Anish",
          last_name: "Rijal",
          skill: "Nothing",
          recruiter: "Bobby",
          salary: 70000,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Donovan",
          last_name: "Perry",
          skill: "Java",
          recruiter: "Bobby",
          salary: 91890,
          pay_vacation_cost: 6361
          },
          {
          first_name: "Doan",
          last_name: "Per",
          skill: "Java",
          recruiter: "Bobby",
          salary: 91890,
          pay_vacation_cost: 6361
          }

        ]
      }

      //var reports = resource.query();
       return {

           getReport: function(month){
            return reports[month]
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
