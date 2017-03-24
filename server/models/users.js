var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({ //sets schema type
  name: {type:String, require:true, minlength:2},
  email: {type:String, require:true, unique:true, minlength:2},
  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
}, {timestamps: true})

mongoose.model('User', UserSchema);
