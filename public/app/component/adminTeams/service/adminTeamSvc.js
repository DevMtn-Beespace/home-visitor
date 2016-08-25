angular.module('app')
    .service('adminTeamSvc', function($http) {
        this.getAllTeams = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/teams'
            })
        }

        this.getAllUsers = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/api/users'
            })
        }

        this.addTeam = function(team) {
            console.log("got here, add team");
            return $http({
                method: 'POST',
                url: 'http://localhost:3000/api/teams',
                data: team
            })
        }

    });
