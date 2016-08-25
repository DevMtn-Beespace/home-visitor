angular.module('app')
.controller('adminVisitCtrl', function($scope, $auth, $location, ngDialog, adminVisitSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

  $scope.getAllVisits = function() {
    adminVisitSvc.getAllVisits().then(function(result){
      console.log("all Visits", result);
      $scope.allVisits = result.data;
    });
  }
  $scope.getAllVisits();

  $scope.getMyVisits = function() {
    adminVisitSvc.getMyVisits().then(function(result){
      // console.log(result);
      $scope.visits = result.data;
    });
  }
  $scope.getMyVisits();

  $scope.editVisitModal = function(visit) {
    $scope.visit = visit;
    ngDialog.open({ template: './app/component/adminVisits/view/adminEditVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("edit visit modal", visit);

  };

  $scope.addVisitModal = function() {
    ngDialog.open({ template: './app/component/adminVisits/view/adminAddVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
    console.log("add visit modal");

  };

  $scope.closeModal = function() {
    ngDialog.close();
  };

  $scope.deleteVisit = function(visit) {
    adminVisitSvc.deleteVisit(visit.visit_id).then(function(r){
      $scope.getAllVisits();
      // success message and relocate
    })
  };

});
