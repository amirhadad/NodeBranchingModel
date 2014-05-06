/**
 * User: amir
 * courtesy of http://stackoverflow.com/questions/13320564/how-do-i-use-should-with-mocha-and-mongoose
 */

var app = require('../config/testconfig/app.js');

var localLogger = require('../config/logger.js')(__filename);

var User = require('../app/models/users.js')
    , should = require('should');

var validUserData = {
    email : 'valid.one@email.com',
    username: 'valid.username.one',
    password: 'valid.password.one'
}

var validUserDataTwo = {
    email : 'valid.one@email.com',
    username: 'valid.username.two',
    password: 'valid.password.two'
}

var invalidData = {
    email : 'invalid@email.com',
    password : 'invalid.password',
    username: 'invalid.username'

}
describe('User', function(){
    this.timeout(15000);
    beforeEach(function(done){
        // this cleans out your database before each test
        User.remove(done);
    });

    describe('#save()', function(){
        var user;
        var userTwo;
        // you can use beforeEach in each nested describe
        beforeEach(function(done){
            user = new User(validUserData);
            userTwo = new User(validUserDataTwo);
            done();
        });

        // you are testing for errors when checking for properties
        // no need for explicit save test
        it('first user should have username property', function(done){
            user.save(function(err, user){
                // dont do this: if (err) throw err; - use a test
                should.not.exist(err);
                user.should.have.property('username', validUserData.username);
                user.username.should.equal(validUserData.username);
                user.username.should.not.equal(validUserDataTwo.username);
                user.username.should.not.equal(invalidData.username);
                done();
            });
        });

        // you are testing for errors when checking for properties
        // no need for explicit save test
        it('second should have username property', function(done){
            userTwo.save(function(err, user){
                // dont do this: if (err) throw err; - use a test
                should.not.exist(err);
                userTwo.should.have.property('username', validUserDataTwo.username);
                userTwo.username.should.equal(validUserDataTwo.username);
                userTwo.username.should.not.equal(validUserData.username);
                userTwo.username.should.not.equal(invalidData.username);
                done();
            });
        });
    });
});