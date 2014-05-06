/**
 * User: amir
 * Date: 1/31/14
 * Time: 5:39 PM
 */


default_port = 8081;
var localLogger = require('./config/logger.js')(__filename);


var express = require('express');
var http = require('http');

var app = express();

// all environments
require('./config/environment.js')(app, express);

require('./config/routes.js')(app);

require('./config/httpserver.js')(app);

require('./config/httpsserver.js')(app);

require('./config/database.js')('TempDB');


var User = require('./app/models/users.js');

var validUserData = {
    email : 'valid.one@email.com',
    username: 'valid.username.two',
    password: 'valid.password.two'
}
user = new User
user.newUser(validUserData.email, validUserData.username, validUserData.password,
    function(){
        localLogger.info('User stored!'); });

User.findByEmail(validUserData.email, function(doc) {
    localLogger.info(doc.email);
})
