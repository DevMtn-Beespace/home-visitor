angular.module('app')
.service('myVisitSvc', function($http){

  this.getMyInfo = function(userId) {
    console.log("get my info service", userId);
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/users/' + userId,
    })
  }

  this.getMyVisits = function(userId){
    // need logic to get only the current user's visits
    console.log("get my visits service", userId);
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visits/user/' + userId,
    });
  }

  this.getVisiteeById = function(visiteeId) {
    console.log("get the visitee for a visit", visiteeId);
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/visitees/' + visiteeId,
    });
  }

  this.addVisit = function(data, userId){
    data.userId = userId;
    console.log("service", data);
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
