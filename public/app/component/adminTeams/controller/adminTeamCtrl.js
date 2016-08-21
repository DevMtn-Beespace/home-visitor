angular.module('app')
.controller('adminTeamCtrl', function($scope){

  $scope.members = ["name1","name2","name3","name4","name5","name6"];

  $scope.teams = [
    {"id": 1,
    "team_name": "First Team",
    "team_leader": "Michael",
    "team_second": "James"},

    {"id": 2,
      "team_name": "Second Team",
    "team_leader": "Nancy",
    "team_second": "BooBoo"},

    {"id": 3,
      "team_name": "Third Team",
    "team_leader": "Almaz",
    "team_second": "Diane"},

    {"id": 4,
      "team_name": "Fourth Team",
    "team_leader": "Jackson",
    "team_second": "Jane"},

    {"id": 5,
      "team_name": "Fifth Team",
    "team_leader": "Azeb",
    "team_second": "Karima"},
  ]


});
