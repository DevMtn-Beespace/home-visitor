angular.module('app')
.controller('adminTeamCtrl', function($scope){

  $scope.teams = [
    {"team_name": "First Team",
    "team_leader": "Michael",
    "team_second": "James"},

    {"team_name": "Second Team",
    "team_leader": "Nancy",
    "team_second": "BooBoo"},

    {"team_name": "Third Team",
    "team_leader": "Almaz",
    "team_second": "Diane"},
  ];

});
