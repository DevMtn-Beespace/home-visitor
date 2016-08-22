angular.module('app')
.service('myInfoSvc', function($http){
  this.getMyInfo = function(){
    // need logic to get only the current user's info

    return $http({
      method: 'GET',
      // url: 'http://localhost:3000/api/users/' + $1;
      // check above. Must get current user ID.
    })
  }
});
