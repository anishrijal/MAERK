(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportSkillController',  function (Report ) {

          this.dataReport= Report.getReport;
          console.log(this.dataReport)
          this.column =["first_name", "last_name", "skill", "salary"];
          this.headTitle =["First Name", "Last Name", "Skill", "Salary"];


        })

    })();
