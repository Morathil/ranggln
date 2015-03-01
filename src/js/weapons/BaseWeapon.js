"use strict";

var UnitTypes = require("./../units/Types");

var BaseWeapon = function(game) {
  privateMethods.call(this);
  publicMethods.call(this);
  this.game = game;

  // TODO (DM): probably move to specific units if different magazines for
  // the same weapon exist
  this._magazines = 0;
  this._magazineCount = 0;
  this._magazineSize = 0;

  this._rounds = 0;
  this._roundsPerMinute = 0;
  this._reloadTime = 0;
  this._accuracy = 0;
  this._projectileSpeed = 0;

  this._rangeGround = 0;
  this._rangeAir = 0;
}

var publicMethods = function() {
  this.reload = function(callback) {
    if (this._magazines > 0)
    {
      setTimeout(function() {
        --this._magzines;
        this._rounds = this._magazineSize;
        callback(true);
      }, this._reloadTime);
    }
    else
    {
      callack(false); // false means that the magazines are empty
    }
  };

  this.shoot = function(enemy, shooter, callback) {
    var distance = Phaser.Point.distance(enemy.position, shooter.position);
    if((distance <= this._rangeGround && enemy.type == UnitTypes.GROUND && this._rangeGround > 0 ||
        distance <= this._rangeAir && enemy.type == UnitTypes.AIR && this._rangeAir > 0) &&
       this._rounds > 0)
    {
      var that = this;
      setTimeout(function() {
        that._shootProjectile(enemy.position, shooter.position);
        callback(true);
      }, 60000 / this._roundsPerMinute);
      --this._rounds;
    }
    else
    {
      callback(false); // == empty
    }
  };
};

var privateMethods = function() {};

module.exports = BaseWeapon;
