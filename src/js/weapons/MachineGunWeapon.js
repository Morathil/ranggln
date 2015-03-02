"use strict";

var BaseWeapon = require("./BaseWeapon");

var MachineGunWeapon = function(game) {
  BaseWeapon.call(this, game);

  this._rounds = 1000000;
  this._roundsPerMinute = 1000;
  this._reloadTime = 0;
  this._accuracy = 0;
  this._projectileSpeed = 5000;

  this._rangeGround = 1000;
  this._rangeAir = 1000;

  this._projectileImage = 'machineGunProjectile';
}

var publicMethods = function() {};

var privateMethods = function() {};

privateMethods.call(MachineGunWeapon.prototype);
publicMethods.call(MachineGunWeapon.prototype);

module.exports = MachineGunWeapon;
