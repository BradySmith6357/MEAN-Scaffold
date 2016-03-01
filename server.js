// Requires \\
var express   		 = require('express');
var bodyParser   	 = require('body-parser');
var mongoose   		 = require("mongoose");
var cookieParser 	 = require('cookie-parser');

// Create Express App Object \\
var app = express();

// Connector \\
// mongoose.connect('mongodb://localhost/lingo')

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/Public'));
app.use(cookieParser());

// Routes \\
app.get("/", function(req, res){
  res.sendFile("index.html", {root: "./public/html"})
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})