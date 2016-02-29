// Requires \\
var express   		 = require('express');
var bodyParser   	 = require('body-parser');
var translateCtrl    = require("./controllers/translate.server.Controller.js");
var mongoose   		 = require("mongoose");
var passport   		 = require('passport')
var cookieParser 	 = require('cookie-parser');
var FacebookStrategy = require('passport-facebook').Strategy;

// Create Express App Object \\
var app = express();

// Connector \\
require('./models/translate.server.Model.js')
require('./config/passport.js')(passport)
mongoose.connect('mongodb://localhost/lingo')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));
app.use(cookieParser());
// app.use(session({ secret: 'ilovelamp' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes \\
app.get("/", function(req, res){
  res.sendFile("index.html", {root: "./Public/html"})
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})