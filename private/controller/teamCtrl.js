var app = require('../server.js');

var db = app.get('db');

module.exports = {
  createTeam: function(req, res, next) {
    console.log(req.body);
      db.teams.create_team(req.body.team_name, req.body.team_leader.user_id, req.body.team_second.user_id, function(err, response) {
          console.log("CREATE team sighting", response);
          // use team id to insert into user_teams.
          if (err) {
            console.log(err);
            res.status(400).send("Error");
          } else {
            db.teams.create_team_members(req.body.team_leader.user_id, response[0].team_id, function(err, r){
              console.log(err, r);
            });
            db.teams.create_team_members(req.body.team_second.user_id, response[0].team_id, function(err, r){
              console.log(err, r);
            });
            // for addingmembers, loop to do same line for each member
            res.status(201).send("Team Created");
          }
      });
  },
  getTeams: function(req, res, next) {
      db.teams.get_teams(function(err, response) {
          console.log("GET ALL TEAMS sighting");
          if (err) {
            console.log(err);
            res.status(400).send("Error");
          } else {
            
          // console.log(response);
          res.json(response);
          }
      });
  },
  getTeamById: function(req, res, next) {
    console.log("GET TEAM By ID sighting");
    db.teams.get_team_by_id(req.params.id, function(err, response) {
            if (err) {
                console.log(err);
                console.log('Invalid ID', req.params.id);
                res.send(err);
            } else {
                console.log('success');
                res.send(response)
            }
        });
  },
  updateTeam: function(req, res, next) {
      if (req.params.id) {
        db.teams.update_team(
          req.params.id,
          req.body.team_name,
          req.body.team_leader,
          req.body.team_second,
          function(err, response) {
            console.log("UPDATE TEAM sighting");
            console.log(err);
            res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteTeam: function(req, res, next) {
      if (req.params.id) {
          db.teams.delete_team(req.params.id, function(err, response) {
              console.log("DELETE TEAM sighting");
              console.log(err);
              res.send('TEAM deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
