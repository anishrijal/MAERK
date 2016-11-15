(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportController', function (Report) {

          this.January = function(){
            Report.setMonth('january');
            $state.go($state.current.name, {}, {reload: true})
        //    console.log(this.dataReport);

          }
          this.February = function(){
            Report.setMonth('february');
            $state.go($state.current.name, {}, {reload: true})
            
        //    this.dataReport =Report.getFeb;
            // console.log(this.dataReport);

          }

      });

})();
