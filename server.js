// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// require session for logged in users cookies
var session = require('express-session');
// require node-uuid for creating the unique user id on the session cookie
var uuid = require('node-uuid');
// require Mongo-store to save session inforamtion on database
var MongoStore = require('connect-mongo');
// instantiate the app
var app = express();

//allows us to handle post data from hhtp requests
var bodyParser = require('body-parser');
//this is for regular post requests
app.use(bodyParser.urlencoded({extended: true}));
//this is for post requests that want json back
app.use(bodyParser.json());
//use session on app and set UUID's
app.use(session({
    genid: function(req) {
        return uuid.v1();
    },
    secret: 'FleetLogistics',
    resave: true,
    saveUninitialized: true
}))

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
//require mongoose config
require('./config/mongoose.js');

// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
require('./config/routes.js')(app);

app.listen(8888, function() {
  console.log('cool stuff on: 8888');
});
