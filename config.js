// Return appropriate set of secrets and config
if (process.env.NODE_ENV === 'production') {
  // We are in production - return production set of secrets and config
  module.exports = require('./config/prod');
}  else {
  // We are in development - return development set of secrets and config
  module.exports = require('./config/dev');
}