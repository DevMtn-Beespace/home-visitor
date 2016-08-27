var app = require('../server.js');
var passwordHash = require('password-hash');

var db = app.get('db');

// console.log(db);

module.exports = {
  createUser: function(req, res, next) {
      var hashPassword;
      if (req.body.password) {
          // registering locally
          hashPassword = passwordHash.generate(req.body.password, {
              algorithm: 'sha256'
          });
      } else {
          // otherwise using satellizer
          hashPassword = null;
      }
      db.register.checkForUser([req.body.username, req.body.email], function(err, response) {
        console.log("checking for username or email", response);
        console.log("req body", req.body);
          if (response.length === 0) {
              // username available
              db.register.registerUser([
                  req.body.username,
                  hashPassword,
                  req.body.first_name,
                  req.body.last_name,
                  req.body.address,
                  req.body.city,
                  req.body.state,
                  req.body.zip,
                  req.body.phone,
                  req.body.email,
                  req.body.admin,
                  req.body.visitee,
                  req.body.visitor
              ], function(err, response) {
                  res.status(201).send("user created");
              });
          } else {
              // user already taken
              console.log(response);
              res.status(200).send('Username or email already taken, perhaps by you');
          }
      })
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
    console.log("back end userCtrl fired");
    console.log("req params ID", req.params.id);
      if (req.params.id) {
        var hashPassword;
        if (req.body.password) {
            hashPassword = passwordHash.generate(req.body.password, {
                algorithm: 'sha256'
            });
        }
        console.log("hash Pass", hashPassword);
        db.users.update_user([
          req.params.id,
          req.body.username,
          hashPassword,
          req.body.first_name,
          req.body.last_name,
          req.body.address,
          req.body.city,
          req.body.state,
          req.body.zip,
          req.body.phone,
          req.body.email,
          req.body.admin,
          req.body.visitee,
          req.body.visitor
        ], function(err, response) {
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
    console.log(req.params.id);
      if (req.params.id) {
        console.log("before delete db func");
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
