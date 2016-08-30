angular.module('app')
    .controller('visiteeCtrl', function($scope, $auth, $location, $state, ngDialog, visiteeSvc) {

        $scope.checkloggedIn = function() {
            if (!($auth.getToken())) {
                $location.path('/');
            }
        }();

        $scope.user = JSON.parse(window.localStorage.getItem('user'));

        $scope.getAllVisitees = function() {
            visiteeSvc.getAllVisitees().then(function(result) {
                console.log("all visitees", result);
                $scope.users = result.data;
            });
        };

        $scope.getAllVisitees();

        $scope.getTeamVisitees = function() {
            visiteeSvc.getTeamVisitees().then(function(result) {
                console.log("team visitees", result);
                $scope.userTeams = result.data;
            });
        };

        $scope.getTeamVisitees();

        $scope.addVisitModal = function(visit) {
          $scope.visit = visit;
          ngDialog.open({ template: './app/component/visitees/view/addVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
          console.log("add visit modal", visit);

        };

        $scope.addVisit = function(visit) {
          visit.visitee_fullname = (visit.first_name + ' ' + visit.last_name);
          var userId = $scope.user.user_id;
          console.log("userId", userId);
          console.log("visit", visit);
          visiteeSvc.addVisit(visit, userId).then(function(r){
            console.log("response" ,r);
            ngDialog.close();
            $location.path('/my-visits');

          })
          console.log("add visit evet triggered", visit);
        }

        $scope.getVisitees = function() {
          visiteeSvc.getVisitees().then(function(r){
            $scope.visitees = r.data;
            for (var i = 0; i < $scope.visitees.length; i++) {
              $scope.visitees[i].fullName = ($scope.visitees[i].first_name + ' ' + $scope.visitees[i].last_name);
              // console.log("fullname", $scope.visitees[i].fullName);
            }
          })
        }

        $scope.getVisitees();

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
