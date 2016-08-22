angular.module('app')
.service('adminTeamSvc', function($http){
  this.getAllTeams = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/teams'
    })
  }
});
