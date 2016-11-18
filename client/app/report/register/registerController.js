(function () {
    'use strict';

    angular.module('maerkApp')
        .controller('RegisterController', function (Employee, Report) {
          var yr=2016;
          var currentReport;
          var mt ="January"
          this.reportList= Employee.getEmployee;
          this.selected=[];
          this.getObj= function(year){
            yr=year;
            this.getData(mt);
          }
          this.getData = function(month){
            mt=month;
            Report.getReportMonth(yr,mt).then((report)=>{
               currentReport = report;
               if(report[mt].length!=0){
                 this.reportList=report[mt];
               }
               else{
                 this.reportList= Employee.getEmployee;
               };
             })
          }
          this.selectedRowCallback = function(row){
            console.log(this.reportList);
            console.log(row.monthly_hour, row.offset);
          }
          this.submit = function(){
            Report.update(currentReport);
          }
          this.save= function(){

            for(var i=0 ;i<this.month.length; i++){
              if(this.month[i]!=mt)
              {
                mt = this.month[i+1];
              }
            }
          }

          this.length= function(){
            return this.reportList.length;
          }
          this.query = {
             limit: 5,
             page: 1
           };
           this.default=["January", "2016"];
           this.month = ["January","February","March","April","May","June","July","August","September","October","november","December"];
           var min=2007;
           var max = new Date().getFullYear();
           var year =[];
           for(var i=min; i<=max; i++)
           {
            year.push(i);
           }
           this.year = year;
        });
    })();
