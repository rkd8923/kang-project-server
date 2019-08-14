var express    = require('express');
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://rkd8923:1q2w3e4r@cluster0-8fxtu.mongodb.net/test?retryWrites=true&w=majority');
var db = mongoose.connection;
db.once('open', function () {
   console.log('DB connected!');
});
db.on('error', function (err) {
  console.log('DB ERROR:', err);
});

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) { //1
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'content-type, x-access-token');
  next();
});

// API
app.use('/api/heroes', require('./api/heroes'));
app.use('/api/login', require('./api/login'));
app.use('/api/auth', require('./api/auth'));
app.use('/api/users', require('./api/users'));

// Server
var port = 3000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});