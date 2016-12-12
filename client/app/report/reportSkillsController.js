(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportSkillController', function (Report) {
          this.label=[];
          this.labels=[];
          this.column =["count", "skill", "salary"];
          this.headTitle =["Count", "Skill", "Salary"];
          var min=2007;
          var max = new Date().getFullYear();
          var year =[];
          var date= new Date();
          var yr=date.getFullYear();
          for(var i=min; i<=max; i++){year.push(i);}
          this.year = year;
          this.default=[yr];
          this.getObj = function(year){yr=year;}
          this.tabs = ["January","February","March","April","May","June","July","August","September","October","November","December"];

          this.month = function(month){
            Report.getReportMonth(yr, month).then((report)=>{
              this.label = Report.getSkill(report, month);
              var hashmap={};
              var  count = [];
              for(var i=0; i<this.label.length; i++){
                if(hashmap[this.label[i].skill]){
                  hashmap[this.label[i].skill].count++;
                  hashmap[this.label[i].skill].salary+= this.label[i].salary;
                }
                else{
                  hashmap[this.label[i].skill]={
                    skill: this.label[i].skill,
                    count: 1,
                    salary: this.label[i].salary
                  }
                  count.push(hashmap[this.label[i].skill]);
                }
              }
              this.dataReport = count;
              this.labels = Report.getLabels(count);
              this.data = Report.getData(count);
            });
          }
          this.month('January');
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
