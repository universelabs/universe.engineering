const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

app.use(sslRedirect());

// Morgan http logging for debugging in terminal
app.use(morgan('short'));

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static path
app.use(express.static(path.join(__dirname, 'client/build')));

// Connect routes to app
app.use('/', routes);

//Production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //
  app.get('*', (req, res) => {
    res.sendFile(path.resolve((__dirname = 'client'), 'build', 'index.html'));
  });
}

//Build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

//Server setup
const PORT = process.env.PORT ||9000;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
