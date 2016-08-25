angular.module('app')
    .controller('myVisitCtrl', function($scope, $auth, $location, ngDialog, myVisitSvc) {

        $scope.checkloggedIn = function() {
            if (!($auth.getToken())) {
                $location.path('/');
            }
        }();

        $scope.getMyVisits = function() {
            myVisitSvc.getMyVisits().then(function(result) {
                console.log("my visits", result);
                $scope.visits = result.data;
            });
        };

        $scope.getMyVisits();

        $scope.getVisitees = function() {
          myVisitSvc.getVisitees().then(function(r){
            console.log("visitees", r);
            $scope.visitees = r.data;
            console.log("get visitees tirggered");
          })
        }

        $scope.getVisitees();

        // $scope.selectedVisitee = $scope.visitees[0];

        $scope.addVisit = function(visit) {
          myVisitSvc.addVisit(visit).then(function(r){
            console.log(r);
            ngDialog.close();
          })
          console.log("add visit evet triggered", visit);
        }

        $scope.editVisitModal = function(visit) {
          $scope.visit = visit;
          ngDialog.open({ template: './app/component/myVisits/view/editVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
          console.log("edit visit modal", visit);

        };

        $scope.addVisitModal = function() {
          ngDialog.open({ template: './app/component/myVisits/view/addVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
          console.log("add visit modal");

        };


        $scope.closeModal = function() {
          ngDialog.close();
        };

        $scope.deleteVisit = function(visit) {
          myVisitSvc.deleteVisit(visit.visit_id).then(function(r){
            $scope.getMyVisits();
            console.log("Visit Deleted");
            ngDialog.close();
            // success message and relocate
            // do I need to pass in the whole visit or just visit_id?
          })
        };


    });
