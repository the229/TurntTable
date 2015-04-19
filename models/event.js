var thinky = require('../config/thinky');
var type = thinky.type;

var Event = thinky.createModel('Event', {
  name: type.string().required(),
  date: type.date().required()
}, {
  pk: 'name'
});

module.exports = Event;
