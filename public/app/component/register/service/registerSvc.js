angular.module('app')
.service('registerSvc', function($http){
  this.register = function(data){
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/register',
      data: data
    })
  }

});
