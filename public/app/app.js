angular.module('app', ['ui.router', 'satellizer', 'ngDialog'])
.config(function($stateProvider, $urlRouterProvider, $authProvider, $locationProvider){

  $locationProvider.html5Mode(true);


  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: './app/component/login/view/loginTemplate.html',
      controller: 'loginCtrl'
    })
    .state('register', {
      url: '/register',
      templateUrl: './app/component/register/view/registerTemplate.html',
      controller: 'registerCtrl'
    })
    .state('myVisits', {
      url: '/my-visits',
      templateUrl: './app/component/myVisits/view/my-visitsTemplate.html',
      controller: 'myVisitCtrl'
    })
    .state('myTeams', {
      url: '/my-teams',
      templateUrl: './app/component/myTeams/view/my-teamsTemplate.html',
      controller: 'myTeamCtrl'
    })
    .state('myAvailability', {
      url: '/my-availability',
      templateUrl: '/app/component/myAvailability/view/my-availabilityTemplate.html',
      controller: 'myAvailabilityCtrl'
    })
    .state('myInfo', {
      url: '/my-info',
      templateUrl: '/app/component/myInfo/view/my-infoTemplate.html',
      controller: 'myInfoCtrl'
    })
    .state('visitees', {
      url: '/visitees',
      templateUrl: '/app/component/visitees/view/visiteesTemplate.html',
      controller: 'visiteeCtrl'
    })
    .state('adminTeams', {
      url: '/admin-teams',
      templateUrl: '/app/component/adminTeams/view/admin-teamsTemplate.html',
      controller: 'adminTeamCtrl'
    })
    .state('adminUsers', {
      url: '/admin-users',
      templateUrl: '/app/component/adminUsers/view/admin-usersTemplate.html',
      controller: 'adminUserCtrl'
    })
    .state('adminVisits', {
      url: '/admin-visits',
      templateUrl: '/app/component/adminVisits/view/admin-visitsTemplate.html',
      controller: 'adminVisitCtrl'
    })

  $urlRouterProvider.otherwise('/'); // if view is not in stateProvider, go here.
});
