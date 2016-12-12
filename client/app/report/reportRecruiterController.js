(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('ReportRecruiterController', function (Report) {

          this.label=[];
          this.labels=[];
          this.column =["count", "recruiter", "salary"];
          this.headTitle =["Count", "Recruiter", "Salary"];
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
                       this.label = Report.getRecruiter(report, month);
                       var hashmap={};
                       var  count = [];
                       for(var i=0; i<this.label.length; i++){
                         if(hashmap[this.label[i].recruiter]){
                           hashmap[this.label[i].recruiter].count++;
                           hashmap[this.label[i].recruiter].salary+= this.label[i].salary;
                         }
                         else{
                           hashmap[this.label[i].recruiter]={
                             recruiter: this.label[i].recruiter,
                             count: 1,
                             salary: this.label[i].salary
                           }
                           count.push(hashmap[this.label[i].recruiter]);
                         }
                       }
                       this.dataReport = count;
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

        })

    })();
