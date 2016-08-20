angular.module('app')
.controller('registerCtrl', function($scope, $rootScope, registerSvc){
  console.log(registerSvc);
  $scope.test = 'SCOPE_TEST';
  $rootScope.navStyle = 'register';
});
