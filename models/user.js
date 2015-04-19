var thinky = require('../config/thinky');
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  facebook_id: type.string().required()
});

module.exports = User;
