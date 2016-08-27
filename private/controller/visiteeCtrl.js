var app = require('../server.js');

var db = app.get('db');

module.exports = {
  createVisitee: function(req, res, next) {
      db.visitees.create_visitee(function(err, response) {
          console.log("CREATE visitee sighting");
          console.log(err);
          res.send('Visitee Created');
      });
  },
  getVisitees: function(req, res, next) {
      db.visitees.get_visitees(function(err, response) {
          console.log("GET ALL VISITEES sighting");
          console.log(err);
          // console.log(response);
          res.json(response);
      });
  },
  getVisiteeById: function(req, res, next) {
    console.log("GET VISITEE By ID sighting");
    db.visitees.get_visitee_by_id(req.params.id, function(err, response) {
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
  updateVisitee: function(req, res, next) {
      if (req.params.id) {
        db.visitees.update_visitee(
          req.params.id,
          req.body.frequency,
          req.body.priority,
          req.body.user_id,
          req.body.team_id,
          req.body.availability_id,
          function(err, response) {
            console.log("UPDATE VISITEE sighting");
            console.log(err);
            res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteVisitee: function(req, res, next) {
      if (req.params.id) {
          db.visitees.delete_visitee(req.params.id, function(err, response) {
              console.log("DELETE VISITEE sighting");
              console.log(err);
              res.send('VISITEE deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
