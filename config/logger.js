/**
 * User: amir
 * Date: 11/12/13
 * Time: 4:02 PM
 */
var log4js = require('log4js');

module.exports = function(jsFilename) {
    var category = require('path').basename(jsFilename);

    log4js.loadAppender('file');
    log4js.addAppender(log4js.appenders.file('logs/node.js.application.log'), category);

    //logger.info("New logger create for " + category);

    return log4js.getLogger(category);

}