var thinky = require('../config/thinky');
var type = thinky.type;

var Guest = thinky.createModel('Guest', {
  username: type.string().required()
}, {
  pk: 'username'
});

module.exports = Guest;
