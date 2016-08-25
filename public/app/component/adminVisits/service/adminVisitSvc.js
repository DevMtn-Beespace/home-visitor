angular.module('app')
.service('adminVisitSvc', function($http){
  this.getMyVisits = function(){
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

  this.deleteVisit = function(visit_id) {
    console.log(visit_id);
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/visits/' + visit_id
    })
  }

  this.getVisitees = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visitees'
    })
  }

  this.getVisitors = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visitors'
    })
  }

});
