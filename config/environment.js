/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/23/13
 * Time: 4:02 PM
 */
var localLogger = require('./logger.js')(__filename);

module.exports = function(app, express, port)
{
    var path = require('path');
    if(!port) {
        port = default_port;
    }

// all environments
    app.set('port', process.env.PORT || port);
    app.set('httpsport',4443);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

    localLogger.info('Environment is set for app on ports: ' + port + ' and 4443');
// development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

}
