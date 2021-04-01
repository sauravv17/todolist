'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the task'
  },
  Task_Description:{
    type=String,
    Required:'Description'
  },
  Creates_By:{
    type=String,
    Required='name'
  },
  Created_at: {
    type: Date,
    default: Date.now
  },
  Duration:{
    type=setTimeout(function() {}, 10);
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);