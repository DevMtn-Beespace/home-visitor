angular.module('app')
.service('visiteeSvc', function($http){
  this.getAllVisitees = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visitees'
    })
  }

// get my team's visitees
this.getTeamVisitees = function(){
  // need logic to get only the current user's teams visitees

  return $http({
    method: 'GET',
    url: 'http://localhost:3000/api/visitees'
  })
}
// mark visitees availability?

});
