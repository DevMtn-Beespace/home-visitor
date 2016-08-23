angular.module('app')
.service('adminUserSvc', function($http){
  this.getAllUsers = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/users'
    })
  }


this.addUser = function($http){
  console.log("got here, add user");
  return $http({
    method: 'POST',
    url: 'http://localhost:3000/api/users'
  })
}

});
