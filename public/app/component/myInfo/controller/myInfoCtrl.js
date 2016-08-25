angular.module('app')
    .controller('myInfoCtrl', function($scope, $auth, $location, $state, ngDialog, myInfoSvc) {

        $scope.checkloggedIn = function() {
            if (!($auth.getToken())) {
                $location.path('/');
            }
        }();

        $scope.user = JSON.parse(window.localStorage.getItem('user'));

        $scope.getMyTeams = function() {
            console.log("getMyteams from controller");
        };

        $scope.getMyInfo = function(userId) {
            myInfoSvc.getMyInfo(userId).then(function(r) {
                localStorage.removeItem('user');
                console.log("getting my info", r);
                window.localStorage.setItem('user', JSON.stringify(r.data[0]));
                $scope.user = JSON.parse(window.localStorage.getItem("user"));
            });
        };

        $scope.editUserModal = function(user) {
          $scope.user = user;
          ngDialog.open({ template: './app/component/myInfo/view/editUserModal.html', className: 'ngdialog-theme-default', scope: $scope });
          console.log("edit user modal", user);

        };

        $scope.closeModal = function() {
          ngDialog.close();
          console.log("close modal");

        };

        $scope.editUser = function(user) {
            myInfoSvc.editUser(user).then(function(r) {
              console.log("response", r);
              console.log("user_id", user.user_id);
              console.log("edit user from controller");
              $scope.user.password = "";
              ngDialog.close();
            });
        }


        $scope.teams = [{
                "id": 1,
                "team_name": "First Team",
                "team_leader": "Michael",
                "team_second": "James"
            },

            {
                "id": 3,
                "team_name": "Third Team",
                "team_leader": "Almaz",
                "team_second": "Diane"
            },

            {
                "id": 5,
                "team_name": "Fifth Team with a wierd, long name",
                "team_leader": "Azeb",
                "team_second": "Karima"
            },
        ]

    });
