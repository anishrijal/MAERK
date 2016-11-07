'use strict';

(function() {

  function EmployeeResource($resource, $mdDialog) {

    // return $resource('/api/employee/:id/:controller', {id: '@_id'},{
    //   create: {
    //     method: 'post'
    //   },
    //   update: {
    //     method: 'put'
    //   },
    //   getOne: {
    //     method: 'get',
    //     params: {
    //       id: '@_id'
    //     }
    //   }
    //
    //   });
    // }

    var resource = $resource('/api/employee/:id/:controller', {id: '@_id'}
    ,
         {
           create: {
             method: 'post'
           },
           update: {
             method: 'put'
           },
           getOne: {
             method: 'get',
             params: {
               id: '@_id'
             }
           }
         });
       var employees = resource.query();
      //  var _employee = null;
       return {
           getEmployee: employees,
           getOne:function(id){
             return resource.getOne({},{"_id":id})
           },
           create: function(employee){

             new resource(employee).$save().then(function (newEmployee){
               employees.push(newEmployee);

               $mdDialog.hide();

             })

           },
           update: function(employee){
            employee.$save().then(function(newEmployee){})


          }
       }

     };



  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);


})();
