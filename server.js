const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const morgan = require('morgan');
const request = require('request');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const config = require('./config');

const app = express();

app.use(sslRedirect());

// Morgan http logging for debugging in terminal
app.use(morgan('short'));

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Static path
app.use(express.static(path.join(__dirname, 'client/build')));

// Subscribe route
app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;
  
  // Validation
  if (!email) {
    res.redirect('/subscribe-error');
    return;
  }

  // Construct req data
  const data = {
    members: [
      {
        email_address: email,
        status: 'pending',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const postData = JSON.stringify(data);

  const options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/428e146c99',
    method: 'POST',
    headers: {
      Authorization: `auth ${config.mailchimpAPI}`,
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if(err) {
      res.redirect('/subscribe-error');
    } else {
      if(response.statusCode === 200) {
        res.redirect('/subscribe-success');
      } else {
        res.redirect('/subscribe-error');
      }
    }
  });
});

app.post('/send-email', (req, res) => {
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
    from: '"Universe support (no-reply)" <no-reply@universe.engineering.com>', 
    // List of receivers
    to: "support@universe.engineering",
    // Subject line
    subject: "New email from (universe.engineering) 📬",
    // Plain text body
    text: "New email from universe.engineering",
    // HTML body
    html: output
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.redirect('/email-error');
    }
    res.redirect('/email-success');
  });
});

//Production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname = 'client', 'build', 'index.html'));
  })
}

//Build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//Server setup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on ${ PORT }`))