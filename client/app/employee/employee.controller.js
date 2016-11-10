(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('EmployeeController', function (Employee, $mdDialog) {
              this.showOption = false;
              this.showEdit = false;
              this.showDelete = false;
              var self = this;
              var selected;
              this.employeeList = Employee.getEmployee;


              this.selectedRowCallback = function(rows){
                    selected = rows;
                    if(selected.length==0){
                      this.showOption = false;
                      this.showEdit = false;
                      this.showDelete = false;
                    }
                    else if(selected.length == 1){
                      // this.showOption = true;
                      this.showOption = ('Activate Deactive').split(' ').map(function(workType) {
                        return {
                          types: workType
                        };
                      })
                      this.showDelete = true;
                      this.showEdit =true;
                    }
                    else{
                      this.showOption = false;
                      this.showDelete = true;
                      this.showEdit=false;
                    }


              };



              this.edit = function(){

                $mdDialog.show({
                  controller: 'editController',
                  controllerAs: 'vm',
                  templateUrl: '/app/employee/add/employee.add.html',
                  parent: angular.element(document.body),
                  clickOutsideToClose:true,
                  locals: {
                    selected: selected
                  },
                  fullscreen: true
                });

              };

              this.delete = function(rows){

                alert("are u sure u wanna delete");
              }

              this.add = function(ev) {

                $mdDialog.show({
                  controller: 'addController',
                  controllerAs: 'vm',
                  templateUrl: '/app/employee/add/employee.add.html',
                  parent: angular.element(document.body),
                  clickOutsideToClose:true,
                  targetEvent: ev,

                });

              };

        });


    })();
