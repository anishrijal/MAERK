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

              console.log(this.employeeList.length);


              this.selectedRowCallback = function(rows){
                    selected = rows;



                    if(selected.length==0){
                      this.showOption = false;
                      this.showEdit = false;
                      this.showDelete = false;
                    }
                    else if(selected.length == 1){
                      this.showOption =true;
                      this.showDelete = true;
                      this.showEdit =true;
                    }
                    else{
                      this.showOption = true;
                      this.showDelete = true;
                      this.showEdit=false;
                    }


              };

              this.showOptions = [

                {
                  name: 'Acitvate',
                  fn : ()=>{

                    $mdDialog.show({
                      controller: 'activateController',
                      controllerAs: 'vm',
                      template: '<div>Are you sure you want to activate<div>'+
                                    '<md-button ng-click="vm.activate()">Yes</md-button>'+
                                    '<md-button ng-click="vm.cancel()">No</md-button>',
                      parent: angular.element(document.body),
                      locals: {
                        employeeList: this.employeeList,
                        selected: selected
                      },
                      clickOutsideToClose:true
                    })
                  }

                },
                {
                  name: 'Deactivate',
                  fn : ()=>{
                    $mdDialog.show({
                      controller: 'deactivateController',
                      controllerAs: 'vm',
                      template: '<div>Are you sure you want to deactivate<div>'+
                                    '<md-button ng-click="vm.deactivate()">Yes</md-button>'+
                                    '<md-button ng-click="vm.cancel()">No</md-button>',
                      parent: angular.element(document.body),
                      locals: {
                        employeeList: this.employeeList,
                        selected: selected
                      },
                      clickOutsideToClose:true
                    })
                  }
                }
                ];

              this.activate =this.showOptions[0].name;





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
