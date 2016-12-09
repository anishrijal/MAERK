(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportSkillController', function (Report) {
          this.labels=[];
          this.column =["count", "skill", "salary"];
          this.headTitle =["Count", "Skill", "Salary"];
          var min=2007;
          var max = new Date().getFullYear();
          var year =[];
          for(var i=min; i<=max; i++)
          {
           year.push(i);
          }
          this.year = year;
          var date= new Date();
          var yr=date.getFullYear();
          this.default=[yr];

          this.January = function(){
            console.log(yr);
            Report.getReportMonth(yr,'january');
            this.dataReport= Report.getReportYear(yr,'january');
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
