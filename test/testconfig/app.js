/**
 * User: amir
 * Date: 2/5/14
 * Time: 6:05 PM
 */
default_port = 9999;

var express = require('express');
var http = require('http');

var app = express();

// all environments

require('../../config/logger.js')('testapp');

require('../../config/environment.js')(app, express);

require('../../config/database.js')('testappdb');

require('../../config/routes.js')(app);

require('../../config/httpserver.js')(app);

module.exports = app;


