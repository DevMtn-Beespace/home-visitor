angular.module('app')
.controller('adminVisitCtrl', function($scope, $auth, $location, adminVisitSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getAllVisits = function() {
    adminVisitSvc.getAllVisits().then(function(result){
      console.log(result);
      $scope.allVisits = result.data;
    });
  }
  $scope.getAllVisits();

  $scope.getMyVisits = function() {
    adminVisitSvc.getMyVisits().then(function(result){
      console.log(result);
      $scope.visits = result.data;
    });
  }
  $scope.getMyVisits();


});
