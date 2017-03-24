var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({ //sets schema type
  _user: {type: Schema.Types.ObjectId, ref:'User'},
  text: {type:String, require:true},
  description: {type:String},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps: true})

mongoose.model('Question', QuestionSchema);
