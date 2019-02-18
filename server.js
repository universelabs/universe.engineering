const express = require('express');
const morgan = require('morgan');
const request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./config');

const app = express();

// Morgan http logging for debugging in terminal
app.use(morgan('short'));

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: true}));

// Static path
app.use(express.static(path.join(__dirname, 'client/build')));

// Subscribe route
app.post('/', (req, res) => {
  const { firstName, lastName, email } = req.body;
  // console.log(req.body);
  // res.send('Hello, Guy');

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
