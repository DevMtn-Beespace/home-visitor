angular.module('app')
    .controller('myVisitCtrl', function($scope, $auth, $location, ngDialog, myVisitSvc) {

        $scope.checkloggedIn = function() {
            if (!($auth.getToken())) {
                $location.path('/');
            }
        }();

        $scope.getMyVisits = function() {
            myVisitSvc.getMyVisits().then(function(result) {
                console.log(result);
                $scope.visits = result.data;
            });
        };

        $scope.getMyVisits();

        $scope.editVisitModal = function(visit) {
          $scope.visit = visit;
          ngDialog.open({ template: './app/component/myVisits/view/editVisitModal.html', className: 'ngdialog-theme-default', scope: $scope });
          console.log("edit visit modal", visit);

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
