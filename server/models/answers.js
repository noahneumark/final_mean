var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({ //sets schema type
  _user: {type: Schema.Types.ObjectId, ref:'User'},
  text: {type:String, require:true},
  details: {type:String},
  likes: {type:Number, require:true, default: 0},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
}, {timestamps: true})

mongoose.model('Answer', AnswerSchema);
