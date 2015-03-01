"use strict";

var Types = require("./Types");

var BaseUnit = function() {
  this._strength = 0;
  this._size = 0;
  this._ecm = 0;
  this._optics = 0;
  this._speed = 0;
  this._stealth = 0;
  this._fuel = 0;
  this.type = Types.INVALID;
}

var publicMethods = function() {

};

var privateMethods = function() {

};

privateMethods.call(BaseUnit.prototype);
publicMethods.call(BaseUnit.prototype);

module.exports = BaseUnit;
