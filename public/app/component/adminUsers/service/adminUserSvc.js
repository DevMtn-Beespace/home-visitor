angular.module('app')
.service('adminUserSvc', function($http){
  this.getAllUsers = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/users'
    })
  }


this.addUser = function(){
  console.log("got here, add user");
  return $http({
    method: 'POST',
    url: 'http://localhost:3000/api/users'
  })
}

this.deleteUser = function(user_id) {
  console.log(user_id);
  return $http({
    method: 'DELETE',
    url: 'http://localhost:3000/api/users/' + user_id
  })
}

this.editUser = function(data) {
  console.log("data.user_id from user service", data.user_id);
  return $http({
    method: 'PUT',
    url: 'http://localhost:3000/api/users/' + data.user_id,
    data: data
  })
}

});
