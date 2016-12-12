/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Employee from '../api/employee/employee.model';
import Report from '../api/report/report.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Employee.find({}).remove()
  .then(() =>{
    Employee.create({

  "first_name": "Adam",
  "last_name": "Griffin",
  "client": [
    "Mudo"
  ],
  "skill": [
    "C#"
  ],
  "recruiter": "Arnold",
  "placement_type": "project",
  "salary": 99895,
  "insurance": 1000,
  "relocation": 1715,
  "immigration": 8451,
  "pay_vacation_cost": 7072,
  "Ksquare_hourly_cost": 55,
  "target_bill_rate": 104574,
  "client_bill_pay": 83784,
  "activate": false
},
{
  "first_name": "Patricia",
  "last_name": "Bradley",
  "client": [
    "Flashdog",
    "Dabtype",
    "Topicshots"
  ],
  "skill": [
    "C#"
  ],
  "recruiter": "Ricky",
  "placement_type": "part-time",
  "salary": 80613,
  "insurance": 611,
  "relocation": 3653,
  "immigration": 9005,
  "pay_vacation_cost": 6629,
  "Ksquare_hourly_cost": 45,
  "target_bill_rate": 65990,
  "client_bill_pay": 111757,
  "activate": false
}, {
  "first_name": "Kathryn",
  "last_name": "Ramos",
  "client": [
    "Kazio"
  ],
  "skill": [
    "SQL"
  ],
  "recruiter": "Bobby",
  "placement_type": "part-time",
  "salary": 91679,
  "insurance": 352,
  "relocation": 2516,
  "immigration": 7159,
  "pay_vacation_cost": 6361,
  "Ksquare_hourly_cost": 51,
  "target_bill_rate": 60021,
  "client_bill_pay": 108495,
  "activate": false
}, {
  "first_name": "Walter",
  "last_name": "Diaz",
  "client": [
    "Skynoodle",
    "Shufflester",
    "Yodo"
  ],
  "skill": [
    "Java"
  ],
  "recruiter": "Ricky",
  "placement_type": "full-time",
  "salary": 71558,
  "insurance": 288,
  "relocation": 4861,
  "immigration": 7782,
  "pay_vacation_cost": 8737,
  "Ksquare_hourly_cost": 55,
  "target_bill_rate": 89969,
  "client_bill_pay": 106938,
  "activate": false
},
// {
//   "first_name": "Clarence",
//   "last_name": "Coleman",
//   "client": [
//     "Latz",
//     "Wordify",
//     "Mycat"
//   ],
//   "skill": [
//     "SAP Business ByDesign",
//     "DVD Authoring"
//   ],
//   "recruiter": "Ricky",
//   "placement_type": "full-time",
//   "salary": 63776,
//   "insurance": 386,
//   "relocation": 3961,
//   "immigration": 7070,
//   "pay_vacation_cost": 6762,
//   "Ksquare_hourly_cost": 35,
//   "target_bill_rate": 106396,
//   "client_bill_pay": 84250,
//   "activate": true
// },
// {
//   "first_name": "Carolyn",
//   "last_name": "Cruz",
//   "client": [
//     "Browsedrive",
//     "Youtags",
//     "Divape"
//   ],
//   "skill": [
//     "OBIEE"
//   ],
//   "recruiter": "Arnold",
//   "placement_type": "project",
//   "salary": 76511,
//   "insurance": 941,
//   "relocation": 1557,
//   "immigration": 8014,
//   "pay_vacation_cost": 6971,
//   "Ksquare_hourly_cost": 65,
//   "target_bill_rate": 103492,
//   "client_bill_pay": 101606,
//   "activate": false
// },
{
  "first_name": "Timothy",
  "last_name": "Ross",
  "client": [
    "Brightdog",
    "Thoughtstorm"
  ],
  "skill": [
    "C#"
  ],
  "recruiter": "Bobby",
  "placement_type": "part-time",
  "salary": 86177,
  "insurance": 346,
  "relocation": 1280,
  "immigration": 5571,
  "pay_vacation_cost": 5269,
  "Ksquare_hourly_cost": 55,
  "target_bill_rate": 64198,
  "client_bill_pay": 97347,
  "activate": false
},
{
  "first_name": "Paul",
  "last_name": "Fuller",
  "client": [
    "Voolith"
  ],
  "skill": [
    "JavaScript"
  ],
  "recruiter": "Rocky",
  "placement_type": "project",
  "salary": 73004,
  "insurance": 613,
  "relocation": 2500,
  "immigration": 8485,
  "pay_vacation_cost": 5729,
  "Ksquare_hourly_cost": 50,
  "target_bill_rate": 109610,
  "client_bill_pay": 117599,
  "activate": false
},
{
  "first_name": "Joe",
  "last_name": "Walker",
  "client": [
    "Tavu",
    "Gigaclub",
    "Yodo"
  ],
  "skill": [
    "JavaScript"
  ],
  "recruiter": "Ricky",
  "placement_type": "project",
  "salary": 56728,
  "insurance": 264,
  "relocation": 4818,
  "immigration": 9962,
  "pay_vacation_cost": 7896,
  "Ksquare_hourly_cost": 55,
  "target_bill_rate": 115543,
  "client_bill_pay": 87657,
  "activate": true
})
});

Report.find({}).remove()
  .then(() =>{
    Report.create({
      year: 2007,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2008,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2009,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2010,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2011,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2012,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2013,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2014,
      January: [],
      February:[],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []
      },
      {
      year: 2015,
      January: [
        {
          "first_name": "Joe",
          "last_name": "Walker",
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
          "placement_type": "project",
          "salary": 56728,
          "insurance": 264,
          "relocation": 4818,
          "immigration": 9962,
          "pay_vacation_cost": 7896,
          "Ksquare_hourly_cost": 55,
          "target_bill_rate": 115543,
          "client_bill_pay": 87657,
          "activate": true
          },
          {
            "first_name": "Paul",
            "last_name": "Fuller",
            "client": [
              "Voolith"
            ],
            "skill": [
              "UCC filings"
            ],
            "recruiter": "Rocky",
            "placement_type": "project",
            "salary": 73004,
            "insurance": 613,
            "relocation": 2500,
            "immigration": 8485,
            "pay_vacation_cost": 5729,
            "Ksquare_hourly_cost": 50,
            "target_bill_rate": 109610,
            "client_bill_pay": 117599,
            "activate": false
          }
        ],
      February: [{
        "first_name": "Tim",
        "last_name": "Carter",
        "client": [
          "Browsedrive",
          "Youtags",
          "Divape"
        ],
        "skill": [
          "OBIEE"
        ],
        "recruiter": "Arnold",
        "placement_type": "project",
        "salary": 76511,
        "insurance": 941,
        "relocation": 1557,
        "immigration": 8014,
        "pay_vacation_cost": 6971,
        "Ksquare_hourly_cost": 65,
        "target_bill_rate": 103492,
        "client_bill_pay": 101606,
        "activate": false
      }, {
        "first_name": "Blake",
        "last_name": "Luke",
        "client": [
          "Brightdog",
          "Thoughtstorm"
        ],
        "skill": [
          "Lawson HRIS"
        ],
        "recruiter": "Bobby",
        "placement_type": "part-time",
        "salary": 86177,
        "insurance": 346,
        "relocation": 1280,
        "immigration": 5571,
        "pay_vacation_cost": 5269,
        "Ksquare_hourly_cost": 55,
        "target_bill_rate": 64198,
        "client_bill_pay": 97347,
        "activate": false
      }],
      March: [],
      April: [],
      May: [],
      June: [],
      July: [],
      August: [],
      September: [],
      October: [],
      November: [],
      December: []

    },
    {
    year: 2016,
    January: [
      {
          "first_name": "Adam",
          "last_name": "Griffin",
          "client": [
            "Mudo"
          ],
          "skill": [
            "DDA"
          ],
          "recruiter": "Arnold",
          "placement_type": "project",
          "salary": 99895,
          "insurance": 1000,
          "relocation": 1715,
          "immigration": 8451,
          "pay_vacation_cost": 7072,
          "Ksquare_hourly_cost": 55,
          "target_bill_rate": 104574,
          "client_bill_pay": 83784,
          "activate": false
        },
        {
          "first_name": "Patricia",
          "last_name": "Bradley",
          "client": [
            "Flashdog",
            "Dabtype",
            "Topicshots"
          ],
          "skill": [
            "Clinical Development"
          ],
          "recruiter": "Ricky",
          "placement_type": "part-time",
          "salary": 80613,
          "insurance": 611,
          "relocation": 3653,
          "immigration": 9005,
          "pay_vacation_cost": 6629,
          "Ksquare_hourly_cost": 45,
          "target_bill_rate": 65990,
          "client_bill_pay": 111757,
          "activate": false
        }
      ],
    February: [{
      "first_name": "Carolyn",
      "last_name": "Cruz",
      "client": [
        "Browsedrive",
        "Youtags",
        "Divape"
      ],
      "skill": [
        "OBIEE"
      ],
      "recruiter": "Arnold",
      "placement_type": "project",
      "salary": 76511,
      "insurance": 941,
      "relocation": 1557,
      "immigration": 8014,
      "pay_vacation_cost": 6971,
      "Ksquare_hourly_cost": 65,
      "target_bill_rate": 103492,
      "client_bill_pay": 101606,
      "activate": false
    }, {
      "first_name": "Timothy",
      "last_name": "Ross",
      "client": [
        "Brightdog",
        "Thoughtstorm"
      ],
      "skill": [
        "Lawson HRIS"
      ],
      "recruiter": "Bobby",
      "placement_type": "part-time",
      "salary": 86177,
      "insurance": 346,
      "relocation": 1280,
      "immigration": 5571,
      "pay_vacation_cost": 5269,
      "Ksquare_hourly_cost": 55,
      "target_bill_rate": 64198,
      "client_bill_pay": 97347,
      "activate": false
    }],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: []

  })

});
