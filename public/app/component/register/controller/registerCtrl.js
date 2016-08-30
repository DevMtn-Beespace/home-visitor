angular.module('app')
.controller('registerCtrl', function($scope, $rootScope, $location, $auth, registerSvc){
  console.log(registerSvc);

  $scope.checkloggedIn = function() {
        if($auth.getToken()) {
          $location.path('/my-visits');
        }
      }();

  $scope.register = function(user) {
    if ($scope.userForm.$valid) {
      registerSvc.register(user).then(function(result){
        console.log(result);
        alert('Registration Complete');
        $location.path('/login');
      })
      console.log("register event triggered", user);
    } else {
      alert("There are invalid fields");
    }
  };

});
