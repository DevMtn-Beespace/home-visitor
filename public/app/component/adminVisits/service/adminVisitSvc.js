angular.module('app')
.service('adminVisitSvc', function($http){
  this.getMyVisits = function(){
    console.log("hit get my admin visits");
    // need logic to get only the current user's teams
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visits'
    })
  };

  this.getAllVisits = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visits'
    })
  };


});
