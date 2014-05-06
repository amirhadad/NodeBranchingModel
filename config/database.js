/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/24/13
 * Time: 11:16 AM
 */
var localLogger = require('./logger.js')(__filename);

module.exports = function(databaseName) {
    mongoose = require('mongoose');

    db = mongoose.connection;
    defaultDateValue = new Date('12/10/1990');
    mongoose.connect('mongodb://localhost/'+ databaseName);
    Schema = mongoose.Schema;
    ObjectId = Schema.Types.ObjectId;

    localLogger.info('Database setup finished: ' + databaseName);

    db.on('error', localLogger.error);
    db.once('open', function() {
        localLogger.info("Connected to '" + databaseName + "' with Mongoose");
    });
}
