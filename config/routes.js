/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/23/13
 * Time: 4:08 PM
 */
var api = require('../app/controllers/api');

var localLogger = require('./logger.js')(__filename);

module.exports = function(app) {
    var email = require('../app/util/email');

    //CORS enabled for all third party hosts. A potential security issue.
    /*app.all('*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });*/

    //Server APIs
    app.get("/", api.main);
    app.get("/login", api.login);
    app.get("/logout", api.logout);

    localLogger.info('Routes are set!');

}