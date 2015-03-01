"use strict";

var BaseUnit = require("./BaseUnit");

var TankUnit = function() {
  BaseUnit.call(this);
}

var publicMethods = function() {

};

var privateMethods = function() {

};

privateMethods.call(TankUnit.prototype);
publicMethods.call(TankUnit.prototype);

module.exports = TankUnit;