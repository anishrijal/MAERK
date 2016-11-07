(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('EmployeeController', function (Employee, $mdToast, $mdDialog) {
              this.showOption = false;
              this.showEdit = false;
              this.showDelete = false;
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
                      this.showOption = true;
                      this.showDelete = true;
                      this.showEdit =true;
                    }
                    else{
                      this.showOption = false;
                      this.showDelete = true;
                      this.showEdit=false;
                    }


              };

              // this.edit = function(ev){
              //   // this.editEmp = true;
              //   // this.addEmp= false;
              //
              //   $mdDialog.show({
              //
              //     controller: editController,
              //     controllerAs: 'vm',
              //     templateUrl: '/app/employee/employee.add.html',
              //     parent: angular.element(document.body),
              //     clickOutsideToClose:true,
              //     targetEvent: ev,
              //     fullscreen: this.customFullscreen
              //   });
              //
              // };

              this.delete = function(rows){

                alert("are u sure u wanna delete");
              }

              this.add = function(ev) {
                // this.editEmp = false;
                // this.addEmp= true;

                $mdDialog.show({
                  controller: addController,
                  controllerAs: 'vm',
                  templateUrl: '/app/employee/employee.add.html',
                  parent: angular.element(document.body),
                  clickOutsideToClose:true,
                  targetEvent: ev,
                  // fullscreen: this.customFullscreen

                });

              };

              function addController(){
                this.editEmp = false;
                this.addEmp= true;

                this.newEmp ={};
                this.newEmp.client=[];
                this.newEmp.skill =[];
                this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
                  return {
                    types: workType
                  };
                })

                this.addEmployee = Employee.create;

                this.cancel = function() {
                      $mdDialog.cancel();
              };

            }
            //   function editController(){
            //
            //     this.editEmp = true;
            //     this.addEmp= false;
            //     this.editEmployee = Employee.update;
            //
            //     this.cancel = function() {
            //           $mdDialog.cancel();
            //   };
            //
            // }

        });


    })();
