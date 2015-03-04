"use strict";

var BaseWeapon = require("./BaseWeapon");

var TankGunWeapon = function(game) {
  this._initSuper(game);

  this._magazines = 28;
  this._magazineSize = 5;

  this._rounds = 5;
  this._roundsPerMinute = 10;
  this._reloadTime = 8000;
  this._accuracy = 0;
  this._projectileSpeed = 1000;

  this._rangeGround = 1000;
  this._rangeAir = 1000;

  this._projectileImage = 'tankGunProjectile';
}

var publicMethods = function() {};

var privateMethods = function() {};

BaseWeapon.privateMethods.call(TankGunWeapon.prototype);
BaseWeapon.publicMethods.call(TankGunWeapon.prototype);

privateMethods.call(TankGunWeapon.prototype);
publicMethods.call(TankGunWeapon.prototype);

module.exports = TankGunWeapon;
