angular.module('app')
    .controller('adminTeamCtrl', function($scope, $auth, $location, ngDialog, adminTeamSvc) {

        $scope.checkloggedIn = function() {
            if (!($auth.getToken())) {
                $location.path('/');
            }
        }();

        $scope.getAllUsers = function() {
            adminTeamSvc.getAllUsers().then(function(result) {
                console.log(result);
                $scope.users = result.data;
            });
        };
        $scope.getAllUsers();

        $scope.getAllTeams = function() {
            adminTeamSvc.getAllTeams().then(function(result) {
                console.log(result);
                // $scope.teams = result.data;
                console.log("$scope.teams", $scope.teams);
                // need logic to get team members

                // $scope.teams[0].members = [{"name":"name1","name":"name2","name":"name3","name":"name4","name":"name5","name":"name6"}];
                // $scope.teams[1].members = [{"name":"next1","name":"next2","name":"next3","name":"next4","name":"next5"}];
                // $scope.teams[2].members = ["Dylan", "Aaron", "James", "Diane", "Peter", "Jason", "Phil", "Jenny"];
            });
        };
        $scope.getAllTeams();

        $scope.addTeam = function(team) {
            adminTeamSvc.addTeam(team).then(function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                };
            });
        };

        $scope.editTeamModal = function(team) {
            $scope.team = team;
            ngDialog.open({
                template: './app/component/adminTeams/view/adminEditTeamModal.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
            console.log("edit team modal", user);
        };

        $scope.closeEditModal = function() {
            ngDialog.close();
            console.log("close edit team modal");

        };

        $scope.addTeamModal = function(team) {
            $scope.team = team;
            ngDialog.open({
                template: './app/component/adminTeams/view/adminAddTeamModal.html',
                className: 'ngdialog-theme-default',
                scope: $scope
            });
            console.log("add team modal", team);
        };

        $scope.closeAddModal = function() {
            ngDialog.close();
            console.log("close add team modal");

        };

        $scope.members = ["Will Do","Happy Gilmore","Jordan Keller","Basel Jones"];
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
