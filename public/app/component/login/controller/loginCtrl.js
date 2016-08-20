angular.module('app')
.controller('loginCtrl', function($scope, $rootScope, $location, $auth){

  $rootScope.navStyle = 'admin';

  console.log($rootScope.navStyle);

  $scope.navStyle = $rootScope.navStyle;
});
