var Guest = require('./guest');
var User = require('./user');
var Event = require('./event');
var Bac = require('./bac');

module.exports = function() {
  Bac.belongsTo(User, 'user', 'userId',  'id');
  User.hasMany(Bac, 'bacs', 'id', 'userId');

  Bac.belongsTo(Guest, 'guest', 'guestName',  'username');
  Guest.hasMany(Bac, 'bacs', 'username', 'guestName');

  Bac.belongsTo(Event, 'event', 'eventName',  'name');
  Event.hasMany(Bac, 'bacs', 'name', 'eventName' );
}
