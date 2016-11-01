'use strict';

(function() {

  function EmployeeResource($resource) {
    return $resource('/api/employee/:id/:controller', {id: '@_id'},{
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

    // var resource = $resource('/api/employee/:id/:controller', {id: '@_id'},
    //   {
    //     create: {
    //       method: 'post'
    //     },
    //     update: {
    //       method: 'put'
    //     },
    //     getOne: {
    //       method: 'get',
    //       params: {
    //         id: '@_id'
    //       }
    //     }
    //   });
  //   var employees = resource.query();
  //
  //     return {
  //       getEmployee: employees,
  //       getOne:function(id){
  //         return resource.getOne({},{"_id":id})
  //       }
  //
  //   }
  // };


  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);


})();
