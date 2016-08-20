var app = require('../server.js');

var db = app.get('db');

module.exports = {
  createVisitor: function(req, res, next) {
      db.visitors.create_visitor(function(err, response) {
          console.log("CREATE visitor sighting");
          console.log(err);
          res.send('Visitor Created');
      });
  },
  getVisitors: function(req, res, next) {
      db.visitors.get_visitors(function(err, response) {
          console.log("GET ALL VISITORS sighting");
          console.log(err);
          console.log(response);
          res.json(response);
      });
  },
  getVisitorById: function(req, res, next) {
    console.log("GET VISITOR By ID sighting");
    db.visitors.get_visitor_by_id(req.params.id, function(err, response) {
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
  updateVisitor: function(req, res, next) {
      if (req.params.id) {
        db.visitors.update_visitor(
          req.params.id,
          req.body.user_id,
          req.body.team_id,
          req.body.availability_id,
          function(err, response) {
            console.log("UPDATE VISITOR sighting");
            console.log(err);
            res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteVisitor: function(req, res, next) {
      if (req.params.id) {
          db.visitors.delete_visitor(req.params.id, function(err, response) {
              console.log("DELETE VISITOR sighting");
              console.log(err);
              res.send('VISITOR deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
