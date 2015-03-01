"use strict";

var BaseUnit = require("./BaseUnit");
var Types = require("./Types");

var TankUnit = function(game) {
  BaseUnit.call(this, game);
  this.game = game;
  this.type = Types.GROUND;
}

var publicMethods = function() {};

var privateMethods = function() {};

privateMethods.call(TankUnit.prototype);
publicMethods.call(TankUnit.prototype);

module.exports = TankUnit;