/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/23/13
 * Time: 4:07 PM
 */

module.exports = function(app){
    var http = require('http');
    http.globalAgent.maxSockets = 100000;

    http.createServer(app).listen(app.get('port'), function(){
        console.log('Welcomer API server listening on port ' + app.get('port'));
    });

}