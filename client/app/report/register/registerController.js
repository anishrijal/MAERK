(function () {
    'use strict';
    angular.module('maerkApp')
        .controller('RegisterController', function (Employee, Report, $mdDialog, getDefault) {
          this.month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
          var date= new Date();
          var yr=date.getFullYear();
          var mt =this.month[date.getMonth()];
          this.default=[mt, yr];
          var currentReport = {
                                year: yr,
                                [mt] : Employee.getEmployee.map(function(item){
                                  return angular.copy(item)
                                })
                            };
          this.reportList= currentReport[mt];
          this.selected=[];
          this.getObj= function(year, mt){
            yr=year;
            this.getData(mt);
          }
          this.getData = function(month){
            mt=month;
            Report.getReportMonth(yr,mt).then((report)=>{
               currentReport = {
                                  year: yr,
                                  _id:report._id,
                                  [mt]: Employee.getEmployee.map(function(item){
                                    return angular.copy(item)
                                  })
                                }
                                //
               if(report[mt].length!=0){
                  currentReport = report;
                 this.reportList=report[mt];
               }
               else{
                 this.reportList=currentReport[mt];
               };
             })
          }
          this.submit = function(){
              $mdDialog.show({
                controller: 'saveController',
                controllerAs: 'vm',
                template: '<div>Are you sure you want to Submit<div>'+
                              '<md-button ng-click="vm.submitMonth()">Yes</md-button>'+
                              '<md-button ng-click="vm.cancel()">No</md-button>',
                parent: angular.element(document.body),
                locals: {
                  currentReport: currentReport
                },
                clickOutsideToClose:true
              })
          }
          this.save= function(){
            var mtt;
            for(var i=0 ;i<this.month.length; i++){
              if(this.month[i]==mt)
              {
                mtt= this.month[i+1];
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
