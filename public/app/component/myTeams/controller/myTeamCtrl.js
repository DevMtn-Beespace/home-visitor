angular.module('app')
.controller('myTeamCtrl', function($scope, myTeamSvc){

  $scope.getMyTeams = function() {
    myTeamSvc.getMyTeams().then(function(result){
      // console.log(result);
      $scope.teams = result.data;
    });
  };
  $scope.getMyTeams();

  $scope.members = ["name1","name2","name3","name4","name5","name6"];
  // need logic to get team members

  // $scope.teams = [
  //   {"id": 1,
  //     "team_name": "First Team",
  //   "team_leader": "Michael",
  //   "team_second": "James"},
  //
  //   {"id": 2,
  //     "team_name": "Second Team",
  //   "team_leader": "Nancy",
  //   "team_second": "BooBoo"},
  //
  //   {"id": 3,
  //     "team_name": "Third Team",
  //   "team_leader": "Almaz",
  //   "team_second": "Diane"},
  // ];


});
