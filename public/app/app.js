angular.module('app', ['ui.router', 'satellizer'])
.config(function($stateProvider, $urlRouterProvider, $authProvider, $locationProvider){

  $locationProvider.html5Mode(true);


  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: './app/component/login/view/loginTemplate.html',
      controller: 'loginCtrl'
    })
    .state('myVisits', {
      url: '/my-visits',
      templateUrl: './app/component/myVisits/view/my-visitsTemplate.html',
      controller: 'myVisitCtrl'
    })

  $urlRouterProvider.otherwise('/'); // if view is not in stateProvider, go here.
});
