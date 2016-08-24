angular.module('app')
.controller('adminUserCtrl', function($scope, $auth, $location, ngDialog, adminUserSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getAllUsers = function() {
    adminUserSvc.getAllUsers().then(function(result){
      console.log(result);
      $scope.users = result.data;
    });
  };
  $scope.getAllUsers();

  $scope.addUser = function() {
    adminUserSvc.addUser().then(function(result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      };
    });
  };

  $scope.deleteUser = function(user) {
    adminUserSvc.deleteUser(user.user_id).then(function(r){
      $scope.getAllUsers();
    })
  };

  $scope.editUserModal = function(user) {
    $scope.user = user;
    ngDialog.open({ template: './app/component/adminUsers/view/adminEditUserModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("edit user modal", user);

  };

  $scope.closeEditModal = function() {
    ngDialog.close();
    console.log("close edit user modal");

  };

  $scope.editUser = function(user) {
    adminUserSvc.editUser(user).then(function(r){
      console.log("response", r);
      console.log("user_id", user.user_id);
      console.log("edit user from controller");
      ngDialog.close();
      $location.path('/admin-users');
    })
  }


  // fake user team data for formatting
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
      "team_name": "Fifth Team with a wierd, long name",
    "team_leader": "Azeb",
    "team_second": "Karima"},
  ]
});
