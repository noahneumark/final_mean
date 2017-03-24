app.controller('AnswerController', ['$scope', '$routeParams', 'theFactory', function($scope, $routeParams, theFactory){
  function show(){
    theFactory.show($routeParams.id, function(data){
      $scope.question = data;
    })
  }
  show();
  $scope.addAnswer = function(answer){
    theFactory.addAnswer(answer, $routeParams.id);
  }
  function getCurrentUser() {
    theFactory.getCurrentUser(function(data){
      $scope.currentuser = data;
    });

  }
  getCurrentUser();
}]);
