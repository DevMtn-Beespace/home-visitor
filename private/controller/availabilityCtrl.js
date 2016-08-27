var app = require('../server.js');

var db = app.get('db');

module.exports = {
  createAvailability: function(req, res, next) {
      db.availability.create_availability(function(err, response) {
          console.log("CREATE availability sighting");
          console.log(err);
          res.send('Availability Created');
      });
  },
  getAvailability: function(req, res, next) {
      db.availability.get_availability(function(err, response) {
          console.log("GET ALL AVAILABILTY sighting");
          console.log(err);
          console.log(response);
          res.json(response);
      });
  },
  getAvailabilityByUserId: function(req, res, next) {
    console.log("GET AVAILABILITY By USER ID sighting");
    db.availability.get_availability_by_user_id(req.params.id, function(err, response) {
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
  getAvailabilityById: function(req, res, next) {
    console.log("GET AVAILABILITY By ID sighting");
    db.availability.get_availability_by_id(req.params.id, function(err, response) {
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
  updateAvailability: function(req, res, next) {
      if (req.params.id) {
        db.availability.update_availability(
          req.params.id,
          req.body.available_start,
          req.body.available_end,
          function(err, response) {
            console.log("UPDATE AVAILABILITY sighting");
            console.log(err);
            res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteAvailability: function(req, res, next) {
      if (req.params.id) {
          db.availability.delete_availability(req.params.id, function(err, response) {
              console.log("DELETE AVAILABILITY sighting");
              console.log(err);
              res.send('AVAILABILITY deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
