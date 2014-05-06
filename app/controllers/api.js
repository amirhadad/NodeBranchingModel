


var localLogger = require('../../config/logger.js')(__filename);

exports.login = function (req, res) {
    localLogger.trace("user with " + req.sessionID + " is logging in");
    res.send("You are being logged in.");

}

exports.logout = function (req, res) {
    localLogger.trace("user with " + req.sessionID + " is logging out");
    res.send("You are being logged out.");

}

exports.main = function (req, res) {
    localLogger.trace("user with " + req.sessionID + " is logging in");
    res.send("Spider server app is running!");

}
