var app = angular.module('app', ['ngRoute', 'ngMessages']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/logreg.html',
      controller: 'LogregController'
    })
    .when('/questionboard', {
      templateUrl: 'partials/questionboard.html',
      controller: 'QuestionBoardController'
    })
    .when('/addQuestion', {
      templateUrl: 'partials/addQuestion.html',
      controller: 'AddQuestionController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
    .when('/answer/:id', {
      templateUrl: 'partials/answer.html',
      controller: 'AnswerController'
    })

});
