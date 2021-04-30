var nodemailer = require("nodemailer");
const fs = require('fs');

const { promisify } = require('util');

const readFile = promisify(fs.readFile);


async function sendEmail(){
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
           user: '169542c885a2fc',
           pass: 'c457a2e7f0bb62'
        }
    });
    const message = {
        from: 'emails@product.com', // Sender address
        to: 'to@email.com',         // List of recipients
        subject: 'Design Your Model S | Tesla', // Subject line
        text: 'Have the most fun you can in a car. Get your Tesla today!', // Plain text body
        html:await readFile('index.html', 'utf8')
    };
transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});
}
sendEmail()