angular.module('app')
.controller('myAvailabilityCtrl', function($scope, $auth, $location, myAvailabilitySvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getMyAvailability = function() {
    myAvailabilitySvc.getMyAvailability().then(function(result){
      console.log(result);
      $scope.availability = result.data;
    });
  };

  $scope.getMyAvailability();

});
