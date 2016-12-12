'use strict';

import mongoose from 'mongoose';
// import {EmployeeSchema} from '../employee/employee.model';

// var EmployeeSchema = require('../employee/employee.model').Employee;

var EmployeeSchema = new mongoose.Schema({
  first_name: {
               type: String,
               required: true
             },
  last_name: {
               type: String,
               required: true
             },
  client: {
           type: [],
           required: true
         },
  skill: {
           type: [],
           required: true
         },
  recruiter: {
               type: String,
               required: true
             },
  placement_type: {
               type: String,
               required: true
             },
  salary: {
           type: Number,
           required: true
         },
 insurance: {
            type: Number,
            required: true
          },
  relocation: {
               type: Number,
               required: true
             },
  immigration: {
                 type: Number,
                 required: true
               },
  pay_vacation_cost: {
                       type: Number,
                       required: true
                     },
  Ksquare_hourly_cost: {
                       type: Number,
                       required: true
                     },
  target_bill_rate:{
                       type: Number,
                       required: true
                     },
  client_bill_pay:{
                       type: Number,
                       required: true
                     },
  monthly_hour: {
                  type: Number
                },
  offset: {
      type: Number
  },
  activate: {
           type: Boolean,
           default:true
         }

});


var ReportSchema = new mongoose.Schema({
   year:{
     type: Number,
     required: true
   },
   January: [EmployeeSchema],
   February: [EmployeeSchema],
   March: [EmployeeSchema],
   April: [EmployeeSchema],
   May: [EmployeeSchema],
   June: [EmployeeSchema],
   July: [EmployeeSchema],
   August: [EmployeeSchema],
   September: [EmployeeSchema],
   October: [EmployeeSchema],
   November: [EmployeeSchema],
   December: [EmployeeSchema]
});



export default mongoose.model('Report', ReportSchema);
