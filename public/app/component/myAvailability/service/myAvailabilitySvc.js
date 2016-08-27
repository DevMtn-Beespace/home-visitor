angular.module('app')
    .service('myAvailabilitySvc', function($http) {

        this.getMyAvailability = function(userId) {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/availability/user/' + userId
            })
        }

        this.setAvailability = function(availability) {
          console.log(availability);
          return $http({
            method: 'PUT',
            url: 'http://localhost:3000/api/availability/' + availability.user_id,
            data: availability
          })
        }


    });
