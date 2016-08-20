var app = require('../server.js');

var db = app.get('db');

module.exports = {
  createMessage: function(req, res, next) {
      db.messages.create_message(function(err, response) {
          console.log("CREATE message sighting");
          console.log(err);
          res.send('Message Created');
      });
  },
  getMessages: function(req, res, next) {
      db.messages.get_messages(function(err, response) {
          console.log("GET ALL MESSAGES sighting");
          console.log(err);
          console.log(response);
          res.json(response);
      });
  },
  getMessageById: function(req, res, next) {
    console.log("GET MESSAGE By ID sighting");
    db.messages.get_message_by_id(req.params.id, function(err, response) {
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
  updateMessage: function(req, res, next) {
      if (req.params.id) {
        db.messages.update_message(
          req.params.id,
          req.body.from_user_id,
          req.body.to_user_id,
          req.body.about_user_id,
          req.body.message,
          function(err, response) {
            console.log("UPDATE MESSAGE sighting");
            console.log(err);
            res.json(response);
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }
  },
  deleteMessage: function(req, res, next) {
      if (req.params.id) {
          db.messages.delete_message(req.params.id, function(err, response) {
              console.log("DELETE MESSAGE sighting");
              console.log(err);
              res.send('MESSAGE deleted');
          });
      } else {
          console.log('Invalid ID', req.params.id);
          res.send('Invalid ID')
      }

  }
};
