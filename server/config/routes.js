var controller = require('./../controllers/controller.js')

module.exports = function(app){
  app.post('/register', controller.register);
  app.post('/login', controller.login);
  app.get('/getUser', controller.getUser);
  app.get('/logout', controller.logout);
  app.post('/addQuestion', controller.addQuestion);
  app.get('/getQuestions', controller.getQuestions);
  app.get('/show/:id', controller.show);
  app.post('/addAnswer', controller.addAnswer);
  app.get('/addLike/:id', controller.addLike);
}
