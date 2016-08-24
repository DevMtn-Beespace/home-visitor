angular.module('app')
.controller('navCtrl', function($scope, $auth, $location){

  $scope.checkLoggedIn = function() {
        if(!($auth.getToken())) {
          $scope.loggedIn = false;
          console.log("logged OUT");
        } else {
          $scope.loggedIn = true;
          console.log("logged IN");
          // $scope.user = JSON.parse(window.localStorage.getItem('user'));
          // console.log("$scope.user", $scope.user);
        }
      }();

  $scope.logOut = function() {
    $auth.logout();
    localStorage.clear();
    $location.path('/');
  }



});
