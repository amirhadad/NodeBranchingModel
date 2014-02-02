/**
 * User: amir
 * Date: 1/31/14
 * Time: 5:39 PM
 */


default_port = 8081;

var express = require('express');
var http = require('http');

var app = express();

// all environments
require('./config/environment.js')(app, express);

require('./config/routes.js')(app);

require('./config/httpserver.js')(app);

require('./config/httpsserver.js')(app);

require('./config/database.js')('TempDB');

