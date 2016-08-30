angular.module('app')
.controller('myTeamCtrl', function($scope, $auth, $location, $state, ngDialog, myTeamSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.user = JSON.parse(window.localStorage.getItem('user'));

  $scope.getMyTeams = function() {
    myTeamSvc.getMyTeams().then(function(result){
      // console.log(result);
      // $scope.teams = result.data;
    });
  };

  $scope.getMyTeams();

  $scope.addTeamModal = function() {
    ngDialog.open({ template: './app/component/myTeams/view/addTeamModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("add Team modal");
    // this should show only teams you are not already on
  };

  $scope.closeModal = function() {
    ngDialog.close();
  };

  $scope.joinTeam = function(team) {
    var newteam = {"team_id": 6,
    "team_name": "Sixth Team",
    "team_leader": "Jerry Johnson",
    "team_second": "Mary Watson"}
    $scope.teams.push(newteam);
    ngDialog.close();

  }

  $scope.members = ["James Tichenor","Sally Field","Michael Lecke", "Jordan Keller","Sing Ha","Joe Schmoe","Bally Cosino"];
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

  $scope.join_teams = [
    {"team_id": 4,
    "team_leader": "James Tichenor",
    "team_second": "Sing Ha",
    "team_name": "Fourth Team",
    },

    {"team_id": 5,
    "team_leader": "Will Doo",
    "team_second": "Happy Gilmore",
      "team_name": "Fifth Team"
    },

    {"team_id": 6,
    "team_name": "Sixth Team",
    "team_leader": "Almaz",
    "team_second": "Diane"},
  ];

});
