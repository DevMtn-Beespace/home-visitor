angular.module('app')
.service('myTeamSvc', function($http){
  this.getMyTeams = function(){
    // need logic to get only the current user's teams
    
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/teams'
    })
  }
});
