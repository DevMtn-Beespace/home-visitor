angular.module('app')
.service('myVisitSvc', function($http){
  this.getMyVisits = function(){
    // need logic to get only the current user's teams

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visits'
    })
  }
});
