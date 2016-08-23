angular.module('app')
.controller('myInfoCtrl', function($scope, $auth, $location, myInfoSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getMyInfo = function() {
    myInfoSvc.getMyInfo().then(function(result){
      console.log(result);
      $scope.user = result.data[0];
    });
  };
  $scope.getMyInfo();

  $scope.teams = [
    {"id": 1,
    "team_name": "First Team",
    "team_leader": "Michael",
    "team_second": "James"},

    {"id": 3,
      "team_name": "Third Team",
    "team_leader": "Almaz",
    "team_second": "Diane"},

    {"id": 5,
      "team_name": "Fifth Team with a wierd, long name",
    "team_leader": "Azeb",
    "team_second": "Karima"},
  ]

});
