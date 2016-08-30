angular.module('app')
.controller('adminVisitCtrl', function($scope, $auth, $location, $state, ngDialog, adminVisitSvc){

  $scope.checkloggedIn = function() {
        if(!($auth.getToken())) {
          $location.path('/');
        }
      }();

      $scope.user = JSON.parse(window.localStorage.getItem('user'));

      $scope.getMyInfo = function(userId) {
        console.log("getMyInfo launched in controller", userId);
          adminVisitSvc.getMyInfo(userId).then(function(r) {
              localStorage.removeItem('user');
              console.log("getting my info", r);
              window.localStorage.setItem('user', JSON.stringify(r.data[0]));
              $scope.user = JSON.parse(window.localStorage.getItem("user"));
          });
      };

      $scope.getMyInfo($scope.user.user_id);


      $scope.getMyVisits = function(userId) {
          adminVisitSvc.getMyVisits(userId).then(function(result) {
              console.log("my visits", result);
              $scope.visits = result.data;
              console.log("scope visits", $scope.visits);
          });

      };

      $scope.getMyVisits($scope.user.user_id);

  $scope.getAllVisits = function() {
    adminVisitSvc.getAllVisits().then(function(result){
      console.log("all Visits", result);
      $scope.allVisits = result.data;
    });
  }
  $scope.getAllVisits();

  $scope.getVisitees = function() {
    adminVisitSvc.getVisitees().then(function(r){
      $scope.visitees = r.data;
      for (var i = 0; i < $scope.visitees.length; i++) {
        $scope.visitees[i].fullName = ($scope.visitees[i].first_name + ' ' + $scope.visitees[i].last_name);
        // console.log("fullname", $scope.visitees[i].fullName);
      }
    })
  }

  $scope.getVisitees();

  // $scope.selectedVisitee = $scope.visitees[0];
  var userId = $scope.user.user_id;

  $scope.addVisit = function(visit) {
    console.log("visit", visit);
    adminVisitSvc.addVisit(visit, userId).then(function(r){
      console.log("response" ,r);
      ngDialog.close();
      $state.reload();

    })
    console.log("add visit evet triggered", visit);
  }



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
      $scope.getMyVisits();
      console.log("Visit Deleted");
      ngDialog.close();
      $state.reload();
      // success message and relocate
      // do I need to pass in the whole visit or just visit_id?
    })
  };


  $scope.getVisitors = function() {
    adminVisitSvc.getVisitors().then(function(r){
      console.log("visitors", r);
      $scope.visitors = r.data;
      console.log("get visitors tirggered");
    })
  }

  $scope.getVisitors();

  // $scope.selectedVisitor = $scope.visitors[0];

});
