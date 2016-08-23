angular.module('app')
    .controller('myVisitCtrl', function($scope, $auth, $location, myVisitSvc) {

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




    });
