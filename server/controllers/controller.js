var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  login: function(req,res){
    User.findOne({email: req.body.email}, function(err, data){
      if(data==null){
        res.status(400).send("User not found");
      }
      else {
        req.session.currentuser = data;
        res.sendStatus(200);
      }
    })
  },
  register: function(req, res){
    var user = new User(req.body);
    user.save(function(err, data){
      if (err){
        res.status(400).send("User was not saved into the database")
      }
      else {
        req.session.currentuser = data;
        res.sendStatus(200);
      }
    })
  },
  getUser: function(req, res){
    if (req.session.currentuser){
      res.json(req.session.currentuser);
    }
    else{
      res.status(401).send("No current user");
      console.log(res);
    }
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/');
  },
  addQuestion: function(req, res){
    User.findOne({_id: req.session.currentuser._id}, function(err, curuser){
      if(err){
        res.status(400).send("No current user matched")
      }
      else {
        console.log("found user");
        var question = new Question(req.body);
        question._user = curuser._id;
        question.save(function(err, savedtopic){
          if(err){
            res.status(400).send("Question was not entered into database");
          }
          else {
            curuser.questions.push(savedtopic);
            curuser.save(function(error, saveduser){
              if (error){
                res.status(400).send("Question not added to user's array")
              }
              else {
                console.log(saveduser);
                res.sendStatus(200);
              }
            })
          }
        })
      }
    })
  },
  getQuestions: function(req, res){
    Question.find({}).populate('_user').exec(function(err, data){
      if (err){
        res.status(400).send("No Questions were returned");
      }
      else {
        res.json(data);
      }
    })
  },
  show: function(req, res){
    Question.findOne({_id:req.params.id}).populate('_user').populate({path: 'answers', populate: {path: '_user'}}).exec(function(err, data){
      if (data == null){
        res.status(400).send("No Question found");
      }
      else {
        console.log(data);
        res.json(data);
      }
    })
  },
  addAnswer: function(req, res){
    Question.findOne({_id:req.body.questionid}, function(err, question){
      if(err){
        res.status(400).send("Topic not found")
      }
      else {
        var newanswer = new Answer(req.body.answer);
        newanswer._user = req.session.currentuser._id;
        newanswer._question = question._id;
        newanswer.save(function(error, myanswer){
          if (error){
            res.status(400).send("Answer not saved.")
          }
          else {
            User.findOne({_id:req.session.currentuser._id}, function(err, user){
              if (err){
                res.status(400).send("User data not found.")
              }
              else {
                user.answers.push(myanswer);
                user.save(function(err, saveduser){
                  if(err){
                    res.status(400).send("Answer not saved into User array.")
                  }
                  else {
                    question.answers.push(myanswer);
                    question.save(function(error, savedtopic){
                      if(error){
                        res.status(400).send("Answer not saved into Question array.")
                      }
                      else{
                        res.sendStatus(200);
                      }
                    })
                  }
                })
              }
            })

          }
        })
      }
    })
  },
  addLike: function (req, res){
    Answer.findOne({_id: req.params.id}, function(err, data){
      if (err){
        res.status(400).send("Answer not found.")
      }
      else {
        data.likes ++;
        data.save(function(err, answer){
          if (err){
            res.status(400).send("Likes not saved.")
          }
          else {
            res.sendStatus(200);
          }
        })
      }
    })
  },
}
