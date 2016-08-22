var app = require('../server.js');

var db = app.get('db');

// console.log(db);

module.exports = {
  createUser: function(req, res, next) {
      db.users.create_user(function(err, response) {
          console.log("CREATE user sighting");
          if (err) {
            console.log(err);
            res.status(400).send("Error");
          } else {
            res.status(201).send('User Created');
          }

      });
  },
  getUsers: function(req, res, next) {
      db.users.get_users(function(err, response) {
          console.log("GET ALL USERS sighting");
          console.log(err);
          console.log(response);
          res.json(response);
      });
  },
  getUserById: function(req, res, next) {
    console.log("GET USER By ID sighting");
    db.users.get_user_by_id(req.params.id, function(err, response) {
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
  updateUser: function(req, res, next) {
      if (req.params.id) {
        console.log(req.params.id, req.body.first_name, req.body.last_name, req.body.address, req.body.city, req.body.state, req.body.zip);
        console.log(req.body.region, req.body.phone, req.body.email, req.body.member, req.body.admin);
        db.users.update_user(
          req.params.id,
          req.body.first_name,
          req.body.last_name,
          req.body.address,
          req.body.city,
          req.body.state,
          req.body.zip,
          req.body.phone,
          req.body.email,
          req.body.google_profile_pic,
          req.body.region,
          req.body.member,
          req.body.admin,
          req.body.advocate,
          req.body.google_id,
          req.body.facebook_id,
          req.body.visitee_id,
          req.body.visitor_id,
          req.body.advocate_id,
          req.body.team_id,
          function(err, response) {
            console.log("UPDATE USER sighting");
            console.log(err);
            res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteUser: function(req, res, next) {
      if (req.params.id) {
          db.users.delete_user(req.params.id, function(err, response) {
              console.log("DELETE USER sighting");
              console.log(err);
              res.send('USER deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
