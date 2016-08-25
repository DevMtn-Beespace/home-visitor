angular.module('app')
.service('myVisitSvc', function($http){

  this.getMyVisits = function(){
    // need logic to get only the current user's teams

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visits'
    });
  }

  this.addVisit = function(data){
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/visits',
      data: data
    });
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

  this.deleteVisit = function(visit_id) {
    console.log(visit_id);
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/visits/' + visit_id
    })
  }

});
