const routes = require('express').Router();

const subscribe = require('./subscribe');
const sendEmail = require('./sendEmail');

routes.use('/subscribe', subscribe);
routes.use('/send-email', sendEmail);

module.exports = routes;
