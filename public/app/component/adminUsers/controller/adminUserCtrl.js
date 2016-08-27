angular.module('app')
.controller('adminUserCtrl', function($scope, $auth, $location, $state, ngDialog, adminUserSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getAllUsers = function() {
    adminUserSvc.getAllUsers().then(function(result){
      console.log(result);
      for (var i =0; i <result.data.length; i++) {
        result.data[i].password = "";
      }
      $scope.users = result.data;
    });
  };
  $scope.getAllUsers();

  $scope.addUser = function(user) {
    adminUserSvc.addUser(user).then(function(err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("admin add user event triggered", user);
        console.log("add user result", result);
      };
      ngDialog.close();
      $state.reload();
    });
  };

  $scope.addUserModal = function(user) {
    $scope.user = user;
    ngDialog.open({ template: './app/component/adminUsers/view/adminAddUserModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("add user modal", user);

  };

  $scope.closeModal = function() {
    ngDialog.close();
    console.log("close modal");

  };

  $scope.editUser = function(user) {
    adminUserSvc.editUser(user).then(function(r){
      console.log("response", r);
      console.log("user_id", user.user_id);
      console.log("edit user from controller");
      $scope.user.password = "";
      ngDialog.close();
      $state.reload();
    })
  }

  $scope.editUserModal = function(user) {
    $scope.user = user;
    ngDialog.open({ template: './app/component/adminUsers/view/adminEditUserModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("edit user modal", user);

  };

  $scope.deleteUser = function(user) {
    adminUserSvc.deleteUser(user.user_id).then(function(r){
      $scope.getAllUsers();
    })
  };


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
