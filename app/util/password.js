
var crypto = require('crypto');
var localLogger = require('../../config/logger.js')(__filename);


exports.hashPassword = function (password, saltLength) {
    var sha256Hasher  = crypto.createHash('sha256', 'utf8');

    var salt = generateRandomBytes(saltLength);

    var passwordHashed = sha256Hasher.update(password + salt).digest('base64');

    return {
        encoded : passwordHashed,
        salt: salt
    }
}

exports.validatePassword = function(password, hashPaswordData) {
    var passwordHashed = sha256Hasher.update(password + hashPaswordData.salt).digest('base64');
    if(passwordHashed === hashPaswordData.encoded) {
        return true;
    } else {
        return false;
    }
}
function generateRandomBytes(length) {
    try {
        var buf = crypto.randomBytes(length);
        localLogger.debug('The salt have ' + buf.length + ' bytes of random data:' + buf);
        return buf;
    } catch (ex) {
        localLogger.error(ex);
    }
}