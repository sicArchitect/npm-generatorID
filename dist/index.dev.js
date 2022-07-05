"use strict";

var randomID = function randomID(idLength) {
  var id = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charsAmount = characters.length;

  for (var i = 0; i < idLength; i++) {
    id += characters.charAt(Math.floor(Math.random() * charsAmount));
  }

  return id;
};

module.exports = randomID;