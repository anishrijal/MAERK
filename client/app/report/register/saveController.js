(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('saveController', function (Report, currentReport, $mdDialog) {

          this.submitMonth=function(){
            Report.update(currentReport);
            $mdDialog.hide();
          }


          this.cancel = function() {
                $mdDialog.cancel();

            }
        });
    })();
