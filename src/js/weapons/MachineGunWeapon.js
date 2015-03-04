"use strict";

var BaseWeapon = require("./BaseWeapon");

var MachineGunWeapon = function(game) {
  this._initSuper(game);

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

BaseWeapon.privateMethods.call(MachineGunWeapon.prototype);
BaseWeapon.publicMethods.call(MachineGunWeapon.prototype);

privateMethods.call(MachineGunWeapon.prototype);
publicMethods.call(MachineGunWeapon.prototype);

module.exports = MachineGunWeapon;
