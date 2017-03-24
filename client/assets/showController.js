app.controller('ShowController', ['$scope', '$routeParams', 'theFactory', function($scope, $routeParams, theFactory){
  function show(){
    theFactory.show($routeParams.id, function(data){
      $scope.question = data;
    })
  }
  show();
  $scope.addLike = function(id){
    theFactory.addLike(id, show);
  }
  function getCurrentUser() {
    theFactory.getCurrentUser(function(data){
      $scope.currentuser = data;
    });

  }
  getCurrentUser();

}]);
