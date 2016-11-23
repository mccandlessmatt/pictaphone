import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport('smtps://pictaphonegame%40gmail.com:B3llicose@smtp.gmail.com');

// setup e-mail data with unicode symbols
const mailOptions = {
    from: '"Pictaphone" <foo@blurdybloop.com>', // sender address
    to: 'mmccandl83@gmail.com', // list of receivers
    subject: 'You\'ve been invited to a game 🎮', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<a href="localhost:3000/game/">Hello world 🐴</b>' // html body
};

// send mail with defined transport object
export default function (req, res) {
  console.log('sending an email');
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          res.send(error);
      }
      res.send(`Message sent: ${info.response}`);
  });
}
