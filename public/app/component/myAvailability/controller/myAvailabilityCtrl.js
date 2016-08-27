angular.module('app')
.controller('myAvailabilityCtrl', function($scope, $auth, $location, $state, ngDialog, myAvailabilitySvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.user = JSON.parse(window.localStorage.getItem('user'));

  $scope.getMyAvailability = function(userId) {
    myAvailabilitySvc.getMyAvailability(userId).then(function(result){
      console.log("avail", result);
      $scope.availability = result.data[0];
    });
  };

  $scope.getMyAvailability($scope.user.user_id);

  $scope.addAvailModal = function() {
    ngDialog.open({ template: './app/component/myAvailability/view/addAvailModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("add availability modal");

  };

  $scope.closeModal = function() {
    ngDialog.close();
  };

  var userId = $scope.user.user_id;

  $scope.setAvail = function(availability) {
    $scope.availability = availability;
    console.log("availability", availability);
    myAvailabilitySvc.setAvailability(availability).then(function(r){
      console.log("response" ,r);
      ngDialog.close();
      $state.reload();

    })
  }

});
