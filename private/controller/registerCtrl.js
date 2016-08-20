var passwordHash = require('password-hash');

var app = require('../server.js');

var db = app.get('db');

module.exports = {
    register: function(req, res, next) {
        // console.log('before HASH password', req.body.password);
        var hashPassword = passwordHash.generate(req.body.password, {algorithm: 'sha256'});
        // console.log('AFTER hashPassword', hashPassword);
        res.json(hashPassword);
    }
};
