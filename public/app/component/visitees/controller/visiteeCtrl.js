angular.module('app')
    .controller('visiteeCtrl', function($scope, $auth, $location, $state, ngDialog, visiteeSvc) {

        $scope.checkloggedIn = function() {
            if (!($auth.getToken())) {
                $location.path('/');
            }
        }();

        $scope.getAllVisitees = function() {
            visiteeSvc.getAllVisitees().then(function(result) {
                console.log(result);
                $scope.users = result.data;
            });
        };

        $scope.getAllVisitees();

        $scope.getTeamVisitees = function() {
            visiteeSvc.getTeamVisitees().then(function(result) {
                console.log(result);
                $scope.userTeams = result.data;
            });
        };

        $scope.getTeamVisitees();

        $scope.addVisitModal = function(visit) {
          $scope.visit = visit;
          ngDialog.open({ template: './app/component/visitees/view/addVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
          console.log("add visit modal", visit);

        };

        $scope.closeModal = function() {
          ngDialog.close();
          console.log("close modal");

        };


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
        ];

    });
