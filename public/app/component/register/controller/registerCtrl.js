angular.module('app')
.controller('registerCtrl', function($scope, $rootScope, $location, $auth, registerSvc){
  console.log(registerSvc);

  $scope.checkloggedIn = function() {
        if($auth.getToken()) {
          $location.path('/my-visits');
        }
      }();

});
