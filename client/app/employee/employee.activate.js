(function () {
    'use strict';
    angular.module('maerkApp')
        .controller('activateController', function ($mdDialog, selected, employeeList ) {

          this.selected = selected;
          this.employeeList =employeeList;
          this.activate= function(){
            for (var i=0; i<this.selected.length; i++){
              for(var j=0; j<this.employeeList.length; j++){
                if(this.employeeList[j]._id==selected[i]){
                      this.employeeList[j].activate = true;
                    }
                  }
              }$mdDialog.cancel();



          };

          this.cancel= function(){
            $mdDialog.cancel();
          }

              });

      })();
