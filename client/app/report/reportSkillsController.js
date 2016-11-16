(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportSkillController', function (Report) {
          this.labels=[];
          this.column =["first_name", "last_name", "skill", "salary"];
          this.headTitle =["First Name", "Last Name", "Skill", "Salary"];

          this.January = function(){
            this.dataReport= Report.getReport('january');
            this.labels = Report.getSkill('january');
            this.data = Report.getSalary('january');

          }
          this.February = function(){
            this.dataReport= Report.getReport('february');
            this.labels = Report.getSkill('february');
            this.data = Report.getSalary('february');

          }
          this.January();

          this.options = {legend: {
                              display:true
                            },
                            width: 400,
                            height: 200,
                            responsive: true,
                            maintainAspectRatio: true,
                            chartArea: {
                              height: "100%"
                            }
                          };

      });

})();
