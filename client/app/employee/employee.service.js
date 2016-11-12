'use strict';

(function() {

  function EmployeeResource($resource, $mdDialog, $mdToast) {

    var resource = $resource('/api/employee/:id/:controller', {id: '@_id'},
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
       var employees = resource.query();
       var editEmployee = null;
       return {
           getEmployee: employees,
           getOne:function(id){
             return resource.getOne({},{"_id":id})
           },
           create: function(employee){

             new resource(employee).$save().then(function (newEmployee){
              //  console.log(newEmployee);
               employees.push(newEmployee);

               $mdDialog.hide();

             })

           },
           update: function(employee){

             resource.update({_id:employee._id},employee).$promise.then(function(newEmployee){

               for (var i = 0; i < employees.length; i++) {
                    if (employees[i]._id == newEmployee._id) {
                      employees[i] = newEmployee;
                    }
               }
               $mdToast.hide();
               $mdDialog.hide();
              })

            }

       }

     };


  angular.module('maerkApp')
    .factory('Employee', EmployeeResource);


})();
