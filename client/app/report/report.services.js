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
       var reports = resource.query();
       return {
           getReport: reports,
           getOne:function(id){
             return resource.getOne({},{"_id":id})
           },
           create: function(report){

             new resource(report).$save().then(function (newReport){
               reports.push(newReport);

              //  $mdDialog.hide();

             })

           },
           update: function(report){

            //  resource.update({_id:report._id},report).$promise.then(function(newReport){
             //
            //    for (var i = 0; i < reports.length; i++) {
            //         if (reports[i]._id == newReport._id) {
            //           reports[i] = newReport;
            //         }
            //    }
              //  $mdToast.hide();
              //  $mdDialog.hide();
              })

            }

       }

     };


  angular.module('maerkApp')
    .factory('Report', ReportResource);


})();
