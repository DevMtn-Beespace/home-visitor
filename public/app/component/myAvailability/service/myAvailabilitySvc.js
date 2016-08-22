angular.module('app')
.service('myAvailabilitySvc', function($http){
  this.getMyAvailability = function(){
    // need logic to get only the current user's teams

    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/availability'
    })
  }
});
