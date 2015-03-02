"use strict";

var BaseWeapon = require("./BaseWeapon");

var TankGunWeapon = function(game) {
  BaseWeapon.call(this, game);

  this._magazines = 28;
  this._magazineSize = 1;

  this._rounds = 1;
  this._roundsPerMinute = 1000;
  this._reloadTime = 8000;
  this._accuracy = 0;
  this._projectileSpeed = 1000;

  this._rangeGround = 1000;
  this._rangeAir = 1000;

  this._projectileImage = 'tankGunProjectile';
}

var publicMethods = function() {};

var privateMethods = function() {};

privateMethods.call(TankGunWeapon.prototype);
publicMethods.call(TankGunWeapon.prototype);

module.exports = TankGunWeapon;
