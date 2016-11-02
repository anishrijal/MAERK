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
    }




  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);


})();
