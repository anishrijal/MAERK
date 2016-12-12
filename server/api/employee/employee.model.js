'use strict';

import mongoose from 'mongoose';

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
 activate: {
           type: Boolean,
           default:true
         }

});

// var Employee = mongoose.model('Employee', EmployeeSchema);
//
// module.export = {
//   Employee: Employee
// }

export default mongoose.model('Employee', EmployeeSchema);
