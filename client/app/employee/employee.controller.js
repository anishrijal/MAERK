
(function () {
        'use strict';

        angular.module('maerkApp')
            .controller('EmployeeController', function ($scope, $mdToast) {

                    $scope.employeeList = [
                      {

                                     "name": "Adam Griffin",
                                     "client": [
                                       "Mudo"
                                     ],
                                     "skill": [
                                       "DDA"
                                     ],
                                     "recruiter": "Arnold",
                                     "revenue": 40000,

                                   },
                                   {
                                     "name": "Patricia Bradley",
                                     "client": [
                                       "Flashdog",
                                       "Dabtype",
                                       "Topicshots"
                                     ],
                                     "skill": [
                                       "Clinical Development"
                                     ],
                                     "recruiter": "Ricky",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Kathryn Ramos",
                                     "client": [
                                       "Kazio"
                                     ],
                                     "skill": [
                                       "Screening"
                                     ],
                                     "recruiter": "Bobby",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Walter Diaz",
                                     "client": [
                                       "Skynoodle",
                                       "Shufflester",
                                       "Yodo"
                                     ],
                                     "skill": [
                                       "JavaSE",
                                       "Knowledge Sharing"
                                     ],
                                     "recruiter": "Ricky",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Clarence Coleman",
                                     "client": [
                                       "Latz",
                                       "Wordify",
                                       "Mycat"
                                     ],
                                     "skill": [
                                       "SAP Business ByDesign",
                                       "DVD Authoring"
                                     ],
                                     "recruiter": "Ricky",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Carolyn Cruz",
                                     "client": [
                                       "Browsedrive",
                                       "Youtags",
                                       "Divape"
                                     ],
                                     "skill": [
                                       "OBIEE"
                                     ],
                                     "recruiter": "Arnold",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Timothy Ross",
                                     "client": [
                                       "Brightdog",
                                       "Thoughtstorm"
                                     ],
                                     "skill": [
                                       "Lawson HRIS"
                                     ],
                                     "recruiter": "Bobby",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Paul Fuller",
                                     "client": [
                                       "Voolith"
                                     ],
                                     "skill": [
                                       "UCC filings"
                                     ],
                                     "recruiter": "Rocky",
                                     "revenue": 40000,

                                   }, {
                                     "name": "Joe Walker",
                                     "client": [
                                       "Tavu",
                                       "Gigaclub",
                                       "Yodo"
                                     ],
                                     "skill": [
                                       "Start-ups",
                                       "NPO"
                                     ],
                                     "recruiter": "Ricky",
                                     "revenue": 40000,

                                   }

                    ]
                        });
            }());
