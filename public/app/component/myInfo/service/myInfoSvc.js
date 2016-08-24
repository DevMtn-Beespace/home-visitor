angular.module('app')
.service('myInfoSvc', function($http){

  // this.getMyTeams = function(){
  //   return $http({
  //     method: 'GET'
  //     url: '',
  //     data: data
  //   })
  // }

  this.editUser = function(data) {
    console.log("data.user_id from user service", data.user_id);
    return $http({
      method: 'PUT',
      url: 'http://localhost:3000/api/users/' + data.user_id,
      data: data
    })
  }

  this.getMyInfo = function(userId) {
    // console.log("get my info");
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/users/' + userId,
    })
  }

});
