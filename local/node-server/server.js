const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(morgan('combined'));
server.use('/*', (req, res, next) => {
  const { url, method } = req;
  res.status(200).send(`HTTP ${method} on endpoint: ${url}`);
});

module.exports = server;

