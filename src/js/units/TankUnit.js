"use strict";

var BaseUnit = require("./BaseUnit");

var TankUnit = function(game) {
  this.game = game;
  BaseUnit.call(this, game);
}

var publicMethods = function() {};

var privateMethods = function() {};

privateMethods.call(TankUnit.prototype);
publicMethods.call(TankUnit.prototype);

module.exports = TankUnit;