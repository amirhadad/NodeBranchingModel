/**
 * User: amir
 * Date: 2/5/14
 * Time: 1:36 PM
 */

var localLogger = require('../../config/logger.js')(__filename);

var passwordHasher = require('../util/password.js');
var saveCallback = function(error, documentObj) {
    if(error) {
        localLogger.error(error);
    } else if(documentObj) {
        localLogger.log(documentObj + ' is saved');
    } else {
        var error = 'Unknown error due to null document';
        localLogger.error(error);
        throw error;
    }

}

var userSchema = new Schema(
    {
        username: String,
        email: {type: String, index: { unique: true, required: true } },
        password: {
            salt: String,
            encoded: String
        },
        friends: [
            {type: ObjectId, ref: 'user'}
        ]
    }
);



userSchema.methods = {

    newUser: function(email, username, password, done) {
        localLogger.debug("newUser called with email " + email);
        var passwordData = passwordHasher.hashPassword(password, 8);

        this.username = username;
        this.email = email;
        this.password = passwordData;
        this.save(done);
    }

}
userSchema.statics.findByEmail = function(email, done) {
        this.findOne({email : email}, function (e, user) {
            if (e) {
                throw e;
            } else {
                localLogger.info(user);
                done(user);
            }
        });
}


User = new function () {


    //create a new user
    var validatePassword = function (email, password, success, fail) {
        findByEmail(email,
            function (user) {
                success(validatePassword(password, user.password));
            },
            function (error) {
                fail(error);

            }

        )
    }
    // Making user model available elsewhere!

    var public = {
        'schema': userSchema,
        //'model': model,
        'logger': localLogger,
        'newUser': userSchema.statics.newUser,
        'findByEmail': userSchema.statics.findByEmail
    }
    return public;
}();

mongoose.model('user', userSchema);
module.exports = mongoose.model('user');
