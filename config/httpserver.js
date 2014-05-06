/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/23/13
 * Time: 4:07 PM
 */
var localLogger = require('./logger.js')(__filename);

module.exports = function(app){
    var http = require('http');
    http.globalAgent.maxSockets = 100000;

    http.createServer(app).listen(app.get('port'), function(){
        localLogger.info('Server created to listen on port ' + app.get('port'));
    });

}