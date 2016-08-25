var app = require('../server.js');

var db = app.get('db');

module.exports = {
  createVisit: function(req, res, next) {
      db.visits.create_visit([
        req.body.visitee_id,
        req.body.visitor_id,
        req.body.visit_date,
        req.body.visit_time,
        req.body.contacted,
        req.body.confirmed,
        req.body.cancelled,
        req.body.impromptu
      ],function(err, response) {
          console.log("CREATE VISIT sighting");
          console.log("req body", req.body);
          if (err) {
            console.log("error", err);
            res.status(400).send("error");
          } else {
            res.status(201).send("visit created");
          }
      });
  },
  getVisits: function(req, res, next) {
      db.visits.get_visits(function(err, response) {
          console.log("GET ALL VISITS sighting");
          console.log(err);
          res.json(response);
      });
  },
  getVisitById: function(req, res, next) {
    console.log("GET VISIT By ID sighting");
    db.visits.get_visit_by_id(req.params.id, function(err, response) {
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
  updateVisit: function(req, res, next) {
      if (req.params.id) {
        db.visits.update_visit(
            req.params.id,
            req.body.visitee_id,
            req.body.visitor_id,
            req.body.visit_date,
            req.body.visit_time,
            req.body.contacted,
            req.body.confirmed,
            req.body.cancelled,
            req.body.impromptu,
            req.body.visitor_note,
            req.body.visitee_note,
            req.body.admin_note,
            function(err, response) {
              console.log("UPDATE VISIT sighting");
              console.log(err);
              res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteVisit: function(req, res, next) {
      if (req.params.id) {
          db.visits.delete_visit(req.params.id, function(err, response) {
              console.log("DELETE VISIT sighting");
              console.log(err);
              res.send('Visit deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
