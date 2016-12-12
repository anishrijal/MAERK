(function () {
    'use strict';
    angular.module('maerkApp')
        .controller('toastController', function (Employee, $mdToast, editThis, editEmp) {
          this.editEmp = editEmp;
          this.editThis = editThis;

          this.openMoreInfo =  Employee.update;

          this.closeToast = function() {
            this.editEmp();
                $mdToast.hide();

                }
              });

      })();
