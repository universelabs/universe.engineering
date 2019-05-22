const sendEmail = require('express').Router();
const nodemailer = require('nodemailer');
const config = require('../../config');

sendEmail.post('/', (req, res) => {
  const output = `
  <p>
    <strong>First name</strong><br/>
    ${req.body.firstName}
  </p>
  <p>
    <strong>Last name</strong><br/>
    ${req.body.lastName}
  </p>
  <p>
    <strong>Email</strong><br/>
    ${req.body.email}
  </p>
  <p>
    <strong>Message</strong><br/>
    ${req.body.message}
  </p>
  `;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: `${config.gmailMailer}`,
      pass: `${config.gmailSecret}`
    }
  });

  // Setup email data with unicode symbols
  let mailOptions = {
    // Sender address
    from: '"Universe support (no-reply)" <no-reply@universe.engineering>',
    // List of receivers
    to: 'support@universe.engineering',
    // Subject line
    subject: 'New email from (universe.engineering) 📬',
    // Plain text body
    text: 'New email from universe.engineering',
    // HTML body
    html: output
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, error => {
    if (error) {
      res.redirect('/email-error');
    }
    res.redirect('/email-success');
  });
});

module.exports = sendEmail;
