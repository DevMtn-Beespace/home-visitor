var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var massive = require('massive');
var passwordHash = require('password-hash');
var config = require('./config/config.js');
var connectionString = 'postgres://michaellecke@localhost/homevisit'; // db homevisit
var dbObject = massive.connectSync({connectionString: connectionString});

var app = module.exports = express();

app.set('db', dbObject);

app.use(bodyParser.json());
app.use(cors(config.corsOrigin));
app.use(express.static('../public'));

var userCtrl = require('./controller/userCtrl.js');
var visitCtrl = require('./controller/visitCtrl.js');
var visitorCtrl = require('./controller/visitorCtrl.js');
var visiteeCtrl = require('./controller/visiteeCtrl.js');
var messageCtrl = require('./controller/messageCtrl.js');
var teamCtrl = require('./controller/teamCtrl.js');
var availabilityCtrl = require('./controller/availabilityCtrl.js');
var registerCtrl = require('./controller/registerCtrl.js');
var loginCtrl = require('./controller/loginCtrl.js');

//ENDPOINTS

// USERS
app.get('/api/users', userCtrl.getUsers);
app.get('/api/users/:id', userCtrl.getUserById);
app.put('/api/users/:id', userCtrl.updateUser);
app.post('/api/users', userCtrl.createUser); // users created at login, this one can be used by admin
app.delete('/api/users/:id', userCtrl.deleteUser);

// VISITS
app.get('/api/visits', visitCtrl.getVisits);
app.get('/api/visits/:id', visitCtrl.getVisitById);
app.get('/api/visits/user/:id', visitCtrl.getVisitByUserId);
app.put('/api/visits/:id', visitCtrl.updateVisit);
app.post('/api/visits', visitCtrl.createVisit);
app.delete('/api/visits/:id', visitCtrl.deleteVisit);

// VISITORS
app.get('/api/visitors', visitorCtrl.getVisitors);
app.get('/api/visitors/:id', visitorCtrl.getVisitorById);
app.put('/api/visitors/:id', visitorCtrl.updateVisitor);
app.post('/api/visitors', visitorCtrl.createVisitor);
app.delete('/api/visitors/:id', visitorCtrl.deleteVisitor);

// VISITEES
app.get('/api/visitees', visiteeCtrl.getVisitees);
app.get('/api/visitees/:id', visiteeCtrl.getVisiteeById);
app.put('/api/visitees/:id', visiteeCtrl.updateVisitee);
app.post('/api/visitees', visiteeCtrl.createVisitee);
app.delete('/api/visitees/:id', visiteeCtrl.deleteVisitee);

// MESSAGES
// app.get('/api/messages', messageCtrl.getMessages);
// app.get('/api/messages/:id', messageCtrl.getMessageById);
// app.put('/api/messages/:id', messageCtrl.updateMessage);
// app.post('/api/messages', messageCtrl.createMessage);
// app.delete('/api/messages/:id', messageCtrl.deleteMessage);

//TEAMS
app.get('/api/teams', teamCtrl.getTeams);
app.get('/api/teams/:id', teamCtrl.getTeamById);
app.put('/api/teams/:id', teamCtrl.updateTeam);
app.post('/api/teams', teamCtrl.createTeam);
app.delete('/api/teams/:id', teamCtrl.deleteTeam);

//AVAILABILITY
// app.get('/api/availability', availabilityCtrl.getAvailability);
// app.get('/api/availability/:id', availabilityCtrl.getAvailabilityById);
// app.put('/api/availability/:id', availabilityCtrl.updateAvailability);
// app.post('/api/availability', availabilityCtrl.createAvailability);
// app.delete('/api/availability/:id', availabilityCtrl.deleteAvailability);

// REGISTER
app.post('/api/register', registerCtrl.register);

// USER LOGIN INFO
app.post('/auth/login', loginCtrl.login);

// CATCH ALL
app.all('*', function(req, res, next){
  res.sendFile('index.html', { root: '../public'})
});

// Node Listener
app.listen(config.port, function(){
  console.log('Listening on port', config.port);
})
