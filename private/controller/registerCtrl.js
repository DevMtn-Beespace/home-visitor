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
        db.register.checkForUser([req.body.username], function(err, response) {
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
                    req.body.region,
                    req.body.advocate,
                    req.body.member,
                    req.body.admin
                ], function(err, response) {
                    res.status(201).send("user created");
                });
            } else {
                // user already taken
                // console.log(response);
                res.status(400).send('Username already taken, perhaps by you');
            }
        })
    }
};
