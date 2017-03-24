app.controller('QuestionBoardController', ['$scope', '$routeParams', 'theFactory', function($scope, $routeParams, theFactory){
  function getCurrentUser() {
    theFactory.getCurrentUser(function(data){
      $scope.currentuser = data;
    });

  }
  getCurrentUser();
  function getQuestions(){
    theFactory.getQuestions(function(data){
      $scope.questions = data;
    })
  }
  getQuestions();


}]);
