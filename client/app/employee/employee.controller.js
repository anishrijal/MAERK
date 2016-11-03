(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('EmployeeController', function (Employee, $mdToast) {
              this.showOption = false;
              this.showEdit = false;
              this.showDelete = false;
              var selected;
              this.employeeList = Employee.query();

              this.selectedRowCallback = function(rows){
                    selected = rows;
                    if(selected.length==0){
                      this.showOption = false;
                      this.showEdit = false;
                      this.showDelete = false;
                    }
                    else if(selected.length == 1){
                      this.showOption = true;
                      this.showDelete = true;
                      this.showEdit =true;
                    }
                    else{
                      this.showOption = false;
                      this.showDelete = true;
                      this.showEdit=false;
                    }


              }

              // this.activate=function(){
              //   alert('activate this employee');
              // };
              //
              // this.deactivate=function(){
              //   alert('deactivate this employee');
              // };

              this.edit = function(){
                alert('inside edit');
              };

              this.delete = function(rows){

                alert("are u sure u wanna delete");
              }

        })

    })();
