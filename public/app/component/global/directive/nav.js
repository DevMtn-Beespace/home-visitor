angular.module('app')
.directive('navDirective', function(){
  return {
    restrict: 'E',
    templateUrl: './app/component/global/view/navTemplate.html',
    controller: 'navCtrl'
  }

});
