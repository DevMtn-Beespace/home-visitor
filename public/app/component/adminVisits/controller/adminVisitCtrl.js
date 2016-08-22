angular.module('app')
.controller('adminVisitCtrl', function($scope, $auth, $location){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  

});
