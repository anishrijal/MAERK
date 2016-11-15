(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportClientController', function (Report) {

          this.reportList = Report.getReport;

        })

    })();
