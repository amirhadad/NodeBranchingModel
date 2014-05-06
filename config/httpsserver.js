/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/23/13
 * Time: 4:07 PM
 */
var localLogger = require('./logger.js')(__filename);

module.exports = function(app){
    var fs = require('fs');
    var https = require('https');
    var privateKey  = fs.readFileSync('./config/sslcert/server.key', 'utf8');
    var certificate = fs.readFileSync('./config/sslcert/server.crt', 'utf8');
    var credentials = {key: privateKey, cert: certificate};

    https.globalAgent.maxSockets = 100000;

    https.createServer(credentials, app).listen(app.get('httpsport'), function(){
        localLogger.info('Https server listening on port ' + app.get('httpsport'));
    });


}
