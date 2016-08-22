var app = require('../server.js');
var config = require('../config/config.js');
var request = require('request');
var moment = require('moment');
var jwt = require('jwt-simple');
var passwordHash = require('password-hash');

var db = app.get('db');

function createJWT(user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

module.exports = {
  login: function(req, res, next){
    console.log("incoming login", req.body);
    db.login.verify_user(req.body.username, function (err, response){
      console.log("query first");
      // console.log(err);
      if (response.length === 0) {
        // User not found
        res.status(401).send("user not found");
      } else {
        // User was found
        console.log(response);
        if (passwordHash.verify(req.body.password, response[0].password)) {
          // if passwords match
          res.json({user: response[0], token: createJWT(response[0].username)});
        } else {
          // passwords do not match
          res.status(401).send("passwords do not match");
        }
      }
    })
  }


};
