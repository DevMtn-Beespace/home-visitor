angular.module('app')
.controller('loginCtrl', function($scope, $rootScope, $location, $auth){

  $scope.login = function(user){
    console.log("incoming login", user);
    $auth.login(user).then(function(response){
      console.log('profile info', response);
      $auth.setToken(response.data.token);
            window.localStorage.setItem('user', JSON.stringify(response.data.user[0]));
            $location.path('/my-visits'); // initial page upon logging in.
    });
  }

  $scope.checkloggedIn = function() {
        if($auth.getToken()) {
          $location.path('/my-visits');
        }
      }();
});
