const subscribe = require('express').Router();
const request = require('request');
const config = require('../../config');

// Subscribe route
subscribe.post('/', (req, res) => {
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
      Authorization: `auth ${config.mailchimpAPI}`
    },
    body: postData
  };

  request(options, (err, response, body) => {
    if (err) {
      res.redirect('/subscribe-error');
    } else {
      if (response.statusCode === 200) {
        res.redirect('/subscribe-success');
      } else {
        res.redirect('/subscribe-error');
      }
    }
  });
});

module.exports = subscribe;
