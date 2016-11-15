(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportSkillController', function (Report) {

          this.column =["first_name", "last_name", "skill", "salary"];
          this.headTitle =["First Name", "Last Name", "Skill", "Salary"];

          this.January = function(){
            this.dataReport= Report.getReport('january');
          }
          this.February = function(){
            this.dataReport= Report.getReport('february');
          }
          this.January();

      });

})();
