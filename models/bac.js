var thinky = require('../config/thinky');
var type = thinky.type;

var BAC = thinky.createModel('BAC', {
  id: type.string(),
  value: type.number().required(),
  userId: type.string().required(),
  guestName: type.string().required(),
  eventName: type.string().required(),
});

module.exports = BAC;
