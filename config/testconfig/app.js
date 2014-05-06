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

require('../logger.js')('testapp');

require('../environment.js')(app, express);

require('../database.js')('testappdb');

require('../routes.js')(app);

require('../httpserver.js')(app);

module.exports = app;


