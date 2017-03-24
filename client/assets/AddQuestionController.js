app.controller('AddQuestionController', ['$scope', '$routeParams', 'theFactory', function($scope, $routeParams, theFactory){
  $scope.addQuestion = function(question){
    theFactory.addQuestion(question);
  }
  function getCurrentUser() {
    theFactory.getCurrentUser(function(data){
      $scope.currentuser = data;
    });

  }
  getCurrentUser();
}]);
