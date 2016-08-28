angular.module('app')
.controller('myTeamCtrl', function($scope, $auth, $location, myTeamSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getMyTeams = function() {
    myTeamSvc.getMyTeams().then(function(result){
      // console.log(result);
      // $scope.teams = result.data;
    });
  };

  $scope.getMyTeams();

  $scope.members = ["James Tichenor","Sally Field","Jordan Keller","Sing Ha","Joe Schmoe","Bally Cosino"];
  // need logic to get team members

  $scope.teams = [
    {"team_id": 1,
    "team_leader": "James Tichenor",
    "team_second": "Sing Ha",
    "team_name": "First Team",
    },

    {"team_id": 2,
    "team_leader": "Will Doo",
    "team_second": "Happy Gilmore",
      "team_name": "Second Team"
    },

    {"team_id": 3,
      "team_name": "Third Team",
    "team_leader": "Almaz",
    "team_second": "Diane"},
  ];

});
