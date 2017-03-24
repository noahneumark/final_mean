app.factory('theFactory', ['$location', '$http', '$routeParams', function($location, $http, $routeParams){
  var factory = {};
  factory.register = function(user){
    $http({
      url:'/register',
      method:'POST',
      data: user
    }).then(function(res){
      $location.url('/questionboard')
    }, function(res){
      console.log(res);
    })
  }
  factory.login = function(user){
    $http({
      url:'/login',
      method:'POST',
      data : user
    }).then(function(res){
      $location.url('/questionboard');
    })
  }
  factory.getCurrentUser = function(callback) {
    $http({
      url:'/getUser',
      method:'GET'
    }).then(function(res){
      callback(res.data)
    }, function(res){
      $location.url('/');
    })
  }
  factory.addQuestion = function(question) {
    $http({
      url:'/addQuestion',
      method:'POST',
      data: question
    }).then(function(res){
      $location.url('/questionboard');
    })
  }
  factory.getQuestions = function(callback){
    $http({
      url:'/getQuestions',
      method:'GET'
    }).then(function(res){
      callback(res.data);
    })
  }
  factory.show = function(id, callback) {
    $http({
      url:'/show/'+id,
      method:'GET'
    }).then(function(res) {
      console.log(res);
      callback(res.data);
    })
  }
  factory.addAnswer = function(answer, questionid) {
    $http({
      url:'/addAnswer',
      method:'POST',
      data: {answer:answer, questionid:questionid}
    }).then(function(res){
      $location.url('/questionboard')
    })
  }
  factory.addLike = function(id, callback){
    $http({
      url:'/addLike/'+id,
      method:'GET'
    }).then(function(res){
      callback();
    })
  }

  return factory;
}]);
