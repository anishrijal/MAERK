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

      var reports = resource.query();

       return {
           getReportMonth: function(year, month){
            return resource.getOne({year:year, month:month}).$promise
           },
           getReport: function(month){
            return report[month];
           },
           getSkill: function(report, month){
             var labels=[];
             for(var i=0; i<report[month].length; i++){
                  labels[i] = {skill:report[month][i].skill, salary:report[month][i].salary};
                }
            return labels;
           },
           getLabels: function(count){
             var data =[];
             for(var i=0; i<count.length; i++){
                  data[i] =count[i].skill;
                }
            return data;
            },
            getData: function(count){
              var dat =[];
              for(var i=0; i<count.length; i++){
                   dat[i] =count[i].salary;
                 }
             return dat;
             },
           getClient: function(report, month){
             var labels=[];
             for(var i=0; i<report[month].length; i++){
                  labels[i] = {client:report[month][i].client, salary:report[month][i].salary};
                }
            return labels;
           },
           getRecruiter: function(report, month){
             var labels=[];
             for(var i=0; i<report[month].length; i++){
                  labels[i] = {recruiter:report[month][i].recruiter, salary:report[month][i].salary};
                }
            return labels;
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
