angular.module('app')
.directive('navDirective', function(){
  return {
    restrict: 'E',
    templateUrl: './app/component/nav/view/navTemplate.html',
    controller: 'navCtrl'
  }

});
