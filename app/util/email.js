/**
 * User: amir
 * Date: 1/31/14
 * Time: 5:54 PM
 */

function sendEmail(email) {

    var nodemailer   = require('nodemailer');
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user:   "nodebranchingmodel",
            pass:   "5147543641343333394D31575135315A48373158445543303154345855594146" //TODO update
        }

    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Node Branching Model ✔ <nodebranchingmodel@gmail.com>", // sender address
        to: email, // list of receivers
        subject: "Welcome from Dom ✔", // Subject line
        text: "Dear Customer," +
            "Hope you are well",
        html: "Dear Customer," +
            "<br>Hope you are well</br>"// html body
    };
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
    });

    smtpTransport.close();


};

