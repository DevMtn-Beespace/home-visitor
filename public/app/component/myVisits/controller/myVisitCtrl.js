angular.module('app')
.controller('myVisitCtrl', function($scope, $auth, $location){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  

});
