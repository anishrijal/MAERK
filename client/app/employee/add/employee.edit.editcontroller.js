(function () {
    'use strict';
    angular.module('maerkApp')
        .controller('editController', function (Employee,$mdDialog, selected, $mdToast) {


            this.employeeList = Employee.getEmployee;
            this.editEmp = true;
            this.addEmp= false;
            this.newEmp={};
            var selectedEmp= null;
            this.placeType = ('fulltime project part-time').split(' ').map(function(workType) {
              return {
                types: workType
              };
            })

            for(var i=0; i< this.employeeList.length; i++){
              if(this.employeeList[i]._id==selected){
                selectedEmp =this.employeeList[i];
              }
            }
            angular.copy(selectedEmp, this.newEmp);
            this.editEmployee = (e)=> {
                  this.editEmp = false;
                  // console.log(e);
                  $mdToast.show({
                    parent: e.target.parentNode.parentNode.parentNode,
                    hideDelay: 0,
                    position: 'bottom left',
                    templateUrl : '/app/employee/add/toast/toast.html',
                    controller: 'toastController',
                    controllerAs: 'vm',
                    locals: {
                      editThis: this.newEmp,
                      editEmp: ()=>{
                        this.editEmp =true;
                      }
                    }
                  });
                };

            this.cancel = function() {
                  $mdDialog.cancel();

              }

        });

      })();
