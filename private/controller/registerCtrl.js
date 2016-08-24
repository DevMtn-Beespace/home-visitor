var passwordHash = require('password-hash');

var app = require('../server.js');

var db = app.get('db');

module.exports = {
    register: function(req, res, next) {
        var hashPassword;
        if (req.body.password) {
            // registering locally
            hashPassword = passwordHash.generate(req.body.password, {
                algorithm: 'sha256'
            });
        } else {
            // otherwise usign satellizer
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
    }
};
