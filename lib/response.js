"use strict";

function Response(bot, userProfile) {
  this._bot = bot;
  this.userProfile = userProfile;
  Object.freeze(this);
}

Response.prototype.send = function(messages, optionalTrackingData) {
  return this._bot.sendMessage(this.userProfile, messages, optionalTrackingData);
};

Response.prototype.post = function(fromAdminId, message, optionalTrackingData) {
  return this._bot.postMessage(fromAdminId, messages, optionalTrackingData);
};

module.exports = Response;
