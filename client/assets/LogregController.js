app.controller('LogregController', ['$scope', '$routeParams', 'theFactory', function($scope, $routeParams, theFactory){
  $scope.registerUser = function(user){
    console.log("hi");
    theFactory.register(user);
  }
  $scope.logUser = function(user){
    theFactory.login(user);
  }

}]);
