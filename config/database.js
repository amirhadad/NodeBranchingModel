/**
 * Created with JetBrains WebStorm.
 * User: amir
 * Date: 9/24/13
 * Time: 11:16 AM
 */

module.exports = function(databaseName) {
    mongoose = require('mongoose');

    db = mongoose.connection;
    defaultDateValue = new Date('12/10/1990');
    mongoose.connect('mongodb://localhost/'+ databaseName);
    Schema = mongoose.Schema;

    db.on('error', console.error);
    db.once('open', function() {
        console.log("MY DB Connected to '" + databaseName + "' with Mongoose");
    });
}
