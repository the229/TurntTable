var path = require('path');

var app = require('../app');

module.exports = function() {
  app.use('/api/token', require('./token'));
}
