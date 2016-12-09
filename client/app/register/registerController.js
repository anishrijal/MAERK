(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('RegisterController', function (Report) {


            this.reportList = Report.getReportMonth;

        });

      })();
