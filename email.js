  var nodemailer = require('nodemailer');

                // create reusable transporter object using SMTP transport 
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        admin: 'myuseremail.com',
                        pass: 'password'
                    }
                });

                var mailOptions = {
                    from: 'sender address', // sender address 
                    to: to, // list of receivers 
                    subject: 'Password Reset', // Subject line 
                    html: 'Your one time password is : <b>' + temporaryPassword + ' </b>' // html body 
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    console.log(error,info);
              }